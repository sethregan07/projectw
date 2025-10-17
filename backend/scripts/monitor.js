const express = require('express');
const cron = require('node-cron');
const axios = require('axios');
const winston = require('winston');
const fs = require('fs').promises;
const { execSync, spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 8080;

// Configure logging
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: '/var/log/vps_cloning/monitor.log' }),
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});

// Configuration
const CHECK_INTERVAL = parseInt(process.env.CHECK_INTERVAL) || 300; // 5 minutes
const SCRIPTS_DIR = process.env.CLONING_SCRIPTS_DIR || '/scripts';
const LOGS_DIR = '/var/log/vps_cloning';

// Global state
let lastHealthCheck = null;
let monitoringEnabled = true;
let emergencyCloneInProgress = false;

// Middleware
app.use(express.json());

/**
 * Get system health metrics
 */
async function getSystemHealth() {
    try {
        const health = {
            timestamp: new Date().toISOString(),
            cpu_usage: 0,
            memory_usage: 0,
            disk_usage: 0,
            services_down: 0,
            load_average: []
        };

        // Get CPU usage
        try {
            const cpuResult = execSync("top -bn1 | grep 'Cpu(s)' | sed \"s/.*, *\\([0-9.]*\\)%* id.*/\\1/\" | awk '{print 100 - $1}'", { encoding: 'utf8' });
            health.cpu_usage = parseFloat(cpuResult.trim()) || 0;
        } catch (error) {
            logger.warn('Failed to get CPU usage:', error.message);
        }

        // Get memory usage
        try {
            const memResult = execSync("free | grep Mem | awk '{printf \"%.0f\", $3/$2 * 100.0}'", { encoding: 'utf8' });
            health.memory_usage = parseInt(memResult.trim()) || 0;
        } catch (error) {
            logger.warn('Failed to get memory usage:', error.message);
        }

        // Get disk usage
        try {
            const diskResult = execSync("df / | tail -1 | awk '{print $5}' | sed 's/%//'", { encoding: 'utf8' });
            health.disk_usage = parseInt(diskResult.trim()) || 0;
        } catch (error) {
            logger.warn('Failed to get disk usage:', error.message);
        }

        // Check critical services
        const services = ['docker', 'nginx', 'sshd'];
        for (const service of services) {
            try {
                execSync(`systemctl is-active --quiet ${service}`, { stdio: 'ignore' });
            } catch {
                health.services_down++;
            }
        }

        // Get load average
        try {
            const loadResult = execSync("uptime | awk -F'load average:' '{ print $2 }' | sed 's/^ *//'", { encoding: 'utf8' });
            health.load_average = loadResult.trim().split(',').map(s => parseFloat(s.trim()));
        } catch (error) {
            logger.warn('Failed to get load average:', error.message);
        }

        return health;
    } catch (error) {
        logger.error('Failed to get system health:', error);
        throw error;
    }
}

/**
 * Check if cloning should be triggered based on health
 */
function shouldTriggerClone(health) {
    const triggers = [];

    if (health.cpu_usage > 85) {
        triggers.push({ type: 'cpu-high', value: health.cpu_usage, threshold: 85 });
    }

    if (health.memory_usage > 85) {
        triggers.push({ type: 'mem-high', value: health.memory_usage, threshold: 85 });
    }

    if (health.disk_usage > 85) {
        triggers.push({ type: 'disk-high', value: health.disk_usage, threshold: 85 });
    }

    if (health.services_down > 0) {
        triggers.push({ type: 'service-down', value: health.services_down, threshold: 0 });
    }

    return triggers;
}

/**
 * Execute cloning command
 */
async function executeClone(triggerReason, health) {
    if (emergencyCloneInProgress) {
        logger.warn('Emergency clone already in progress, skipping...');
        return { success: false, reason: 'clone_in_progress' };
    }

    emergencyCloneInProgress = true;

    try {
        logger.info('🚨 Executing emergency clone', { triggerReason, health });

        // Send notification if webhook configured
        if (process.env.NOTIFICATION_WEBHOOK) {
            try {
                await axios.post(process.env.NOTIFICATION_WEBHOOK, {
                    event: 'emergency_clone_started',
                    trigger: triggerReason,
                    health: health,
                    timestamp: new Date().toISOString()
                }, { timeout: 5000 });
            } catch (error) {
                logger.warn('Failed to send webhook notification:', error.message);
            }
        }

        // Execute cloning script with auto-provision
        const cloneCommand = `${SCRIPTS_DIR}/os_cloning_system.sh --auto-provision --target-provider hetzner --target-region fsn1 --emergency`;

        const result = await new Promise((resolve, reject) => {
            const process = spawn('bash', ['-c', cloneCommand], {
                stdio: ['pipe', 'pipe', 'pipe'],
                cwd: SCRIPTS_DIR
            });

            let stdout = '';
            let stderr = '';

            process.stdout.on('data', (data) => {
                stdout += data.toString();
            });

            process.stderr.on('data', (data) => {
                stderr += data.toString();
            });

            process.on('close', (code) => {
                if (code === 0) {
                    resolve({ success: true, stdout, stderr });
                } else {
                    reject(new Error(`Clone failed with code ${code}: ${stderr}`));
                }
            });

            process.on('error', reject);
        });

        logger.info('✅ Emergency clone completed successfully');
        return { success: true, result };

    } catch (error) {
        logger.error('❌ Emergency clone failed:', error);
        return { success: false, error: error.message };
    } finally {
        emergencyCloneInProgress = false;

        // Send completion notification
        if (process.env.NOTIFICATION_WEBHOOK) {
            try {
                await axios.post(process.env.NOTIFICATION_WEBHOOK, {
                    event: 'emergency_clone_completed',
                    success: !error,
                    error: error?.message,
                    timestamp: new Date().toISOString()
                }, { timeout: 5000 });
            } catch (notificationError) {
                logger.warn('Failed to send completion notification:', notificationError.message);
            }
        }
    }
}

/**
 * Run health check and monitoring
 */
async function runHealthCheck() {
    try {
        const health = await getSystemHealth();
        lastHealthCheck = health;

        logger.info('Health check completed', {
            cpu: health.cpu_usage,
            mem: health.memory_usage,
            disk: health.disk_usage,
            services: health.services_down
        });

        if (!monitoringEnabled) {
            logger.debug('Monitoring disabled, skipping trigger checks');
            return;
        }

        const triggers = shouldTriggerClone(health);

        if (triggers.length > 0) {
            logger.warn('🚨 Health triggers detected:', triggers);

            for (const trigger of triggers) {
                await executeClone(trigger, health);
                // Only execute one clone to avoid multiple concurrent operations
                break;
            }
        }

    } catch (error) {
        logger.error('Health check failed:', error);
    }
}

// Start monitoring cron job
if (CHECK_INTERVAL > 0) {
    const cronExpression = `*/${Math.floor(CHECK_INTERVAL / 60)} * * * *`;

    if (cron.validate(cronExpression)) {
        cron.schedule(cronExpression, () => {
            runHealthCheck().catch(error => {
                logger.error('Monitoring error:', error);
            });
        });
        logger.info(`Started monitoring with interval: ${CHECK_INTERVAL}s (${cronExpression})`);
    } else {
        logger.error('Invalid cron expression, disabling monitoring');
    }
}

// API Routes

// Health check endpoint
app.get('/health', async (req, res) => {
    try {
        const health = await getSystemHealth();
        const triggers = shouldTriggerClone(health);

        res.json({
            status: 'healthy',
            timestamp: new Date().toISOString(),
            health: health,
            triggers: triggers,
            monitoring: {
                enabled: monitoringEnabled,
                interval: CHECK_INTERVAL,
                emergency_clone_in_progress: emergencyCloneInProgress
            },
            last_check: lastHealthCheck
        });
    } catch (error) {
        logger.error('Health endpoint error:', error);
        res.status(500).json({
            status: 'error',
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Get current status
app.get('/status', (req, res) => {
    res.json({
        monitoring_enabled: monitoringEnabled,
        check_interval: CHECK_INTERVAL,
        emergency_clone_in_progress: emergencyCloneInProgress,
        last_health_check: lastHealthCheck,
        uptime: process.uptime()
    });
});

// Manual trigger endpoint
app.post('/trigger', async (req, res) => {
    try {
        const health = await getSystemHealth();
        const result = await executeClone('manual', health);

        res.json({
            success: result.success,
            timestamp: new Date().toISOString(),
            trigger: 'manual',
            health: health,
            result: result
        });
    } catch (error) {
        logger.error('Manual trigger error:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: new Date().toISOString()
        });
    }
});

// Toggle monitoring
app.post('/monitoring/:action', (req, res) => {
    const { action } = req.params;

    if (action === 'enable') {
        monitoringEnabled = true;
        logger.info('Monitoring enabled');
        res.json({ success: true, monitoring: true });
    } else if (action === 'disable') {
        monitoringEnabled = false;
        logger.info('Monitoring disabled');
        res.json({ success: true, monitoring: false });
    } else {
        res.status(400).json({ success: false, error: 'Invalid action. Use enable or disable.' });
    }
});

// Get logs endpoint
app.get('/logs', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 100;
        const logContent = await fs.readFile('/var/log/vps_cloning/monitor.log', 'utf8');
        const lines = logContent.split('\n').slice(-limit).join('\n');

        res.set('Content-Type', 'text/plain');
        res.send(lines);
    } catch (error) {
        logger.error('Logs endpoint error:', error);
        res.status(500).json({ error: 'Failed to read logs' });
    }
});

// Error handling middleware
app.use((error, req, res, next) => {
    logger.error('Unhandled error:', error);
    res.status(500).json({
        error: 'Internal server error',
        timestamp: new Date().toISOString()
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Endpoint not found',
        timestamp: new Date().toISOString()
    });
});

// Start server
app.listen(PORT, () => {
    logger.info(`VPS Cloning Monitor running on port ${PORT}`);

    // Initial health check
    runHealthCheck().catch(error => {
        logger.error('Initial health check failed:', error);
    });
});

// Graceful shutdown
process.on('SIGTERM', () => {
    logger.info('Received SIGTERM, shutting down gracefully...');
    process.exit(0);
});

process.on('SIGINT', () => {
    logger.info('Received SIGINT, shutting down gracefully...');
    process.exit(0);
});

module.exports = app;
