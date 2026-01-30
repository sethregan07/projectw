/**
 * API Gateway Microservice
 * 
 * This service acts as the entry point for all client requests,
 * routing them to the appropriate microservices.
 * 
 * Features:
 * - Request routing to appropriate microservices
 * - Authentication and authorization
 * - Rate limiting
 * - Request/response logging
 * - Response caching
 * - Circuit breaking for fault tolerance
 */

const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const morgan = require('morgan');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const NodeCache = require('node-cache');
const CircuitBreaker = require('opossum');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Initialize cache
const cache = new NodeCache({ stdTTL: 300, checkperiod: 60 });

// Service URLs
const AUTH_SERVICE_URL = process.env.AUTH_SERVICE_URL || 'http://auth-service:3001';
const GHOST_SERVICE_URL = process.env.GHOST_SERVICE_URL || 'http://ghost-service:2368';
const MAUTIC_SERVICE_URL = process.env.MAUTIC_SERVICE_URL || 'http://mautic-service:8000';

// Middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan('combined'));

// Rate limiting
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: 'Too many requests from this IP, please try again after 15 minutes'
});

// Apply rate limiting to all requests
app.use(apiLimiter);

// Authentication middleware
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  
  try {
    // Verify token with auth service
    const response = await axios.post(`${AUTH_SERVICE_URL}/api/auth/verify`, { token });
    req.user = response.data.user;
    next();
  } catch (error) {
    console.error('Token verification error:', error.message);
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

// Circuit breaker options
const circuitOptions = {
  timeout: 3000, // If our function takes longer than 3 seconds, trigger a failure
  errorThresholdPercentage: 50, // When 50% of requests fail, trip the circuit
  resetTimeout: 30000 // After 30 seconds, try again
};

// Create circuit breakers for each service
const authServiceBreaker = new CircuitBreaker(
  async (path, options) => {
    return await axios(`${AUTH_SERVICE_URL}${path}`, options);
  },
  circuitOptions
);

const ghostServiceBreaker = new CircuitBreaker(
  async (path, options) => {
    return await axios(`${GHOST_SERVICE_URL}${path}`, options);
  },
  circuitOptions
);

const mauticServiceBreaker = new CircuitBreaker(
  async (path, options) => {
    return await axios(`${MAUTIC_SERVICE_URL}${path}`, options);
  },
  circuitOptions
);

// Proxy middleware options
const proxyOptions = {
  changeOrigin: true,
  pathRewrite: {
    '^/api/auth': '/api/auth',
    '^/api/ghost': '',
    '^/api/mautic': ''
  }
};

// Proxy routes
app.use('/api/auth', createProxyMiddleware({
  ...proxyOptions,
  target: AUTH_SERVICE_URL,
  onProxyReq: (proxyReq, req, res) => {
    // Add any custom headers or modify the request here
    proxyReq.setHeader('X-Forwarded-For', req.ip);
  }
}));

// Ghost CMS routes (some require authentication)
app.use('/api/ghost', (req, res, next) => {
  // Public Ghost API endpoints don't need authentication
  if (req.path.startsWith('/ghost/api/v3/content/')) {
    return createProxyMiddleware({
      ...proxyOptions,
      target: GHOST_SERVICE_URL
    })(req, res, next);
  }
  
  // Admin API requires authentication
  authenticateToken(req, res, () => {
    createProxyMiddleware({
      ...proxyOptions,
      target: GHOST_SERVICE_URL,
      onProxyReq: (proxyReq, req, res) => {
        proxyReq.setHeader('X-Forwarded-For', req.ip);
      }
    })(req, res, next);
  });
});

// Mautic routes (require authentication)
app.use('/api/mautic', authenticateToken, createProxyMiddleware({
  ...proxyOptions,
  target: MAUTIC_SERVICE_URL,
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('X-Forwarded-For', req.ip);
  }
}));

// Direct API endpoints
app.get('/api/services/health', async (req, res) => {
  try {
    // Check cache first
    const cachedHealth = cache.get('services-health');
    if (cachedHealth) {
      return res.json(cachedHealth);
    }
    
    // Check health of all services
    const [authHealth, ghostHealth, mauticHealth] = await Promise.allSettled([
      authServiceBreaker.fire('/health', { method: 'GET' }),
      ghostServiceBreaker.fire('/ghost/api/v3/admin/site/', { method: 'GET' }),
      mauticServiceBreaker.fire('/api/health', { method: 'GET' })
    ]);
    
    const health = {
      gateway: { status: 'ok' },
      auth: { status: authHealth.status === 'fulfilled' ? 'ok' : 'error' },
      ghost: { status: ghostHealth.status === 'fulfilled' ? 'ok' : 'error' },
      mautic: { status: mauticHealth.status === 'fulfilled' ? 'ok' : 'error' }
    };
    
    // Cache the result
    cache.set('services-health', health);
    
    res.json(health);
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({ message: 'Error checking services health' });
  }
});

// User profile endpoint (combines data from multiple services)
app.get('/api/user/profile', authenticateToken, async (req, res) => {
  try {
    // Get user profile from auth service
    const authProfile = await authServiceBreaker.fire('/api/users/profile', {
      method: 'GET',
      headers: {
        'Authorization': req.headers.authorization
      }
    });
    
    // Get user activity from other services
    const [ghostActivity, mauticActivity] = await Promise.allSettled([
      ghostServiceBreaker.fire(`/ghost/api/v3/admin/members/${req.user.email}`, {
        method: 'GET',
        headers: {
          'Authorization': req.headers.authorization
        }
      }),
      mauticServiceBreaker.fire(`/api/contacts/email/${req.user.email}`, {
        method: 'GET',
        headers: {
          'Authorization': req.headers.authorization
        }
      })
    ]);
    
    // Combine the data
    const profile = {
      ...authProfile.data,
      ghost: ghostActivity.status === 'fulfilled' ? ghostActivity.value.data : null,
      mautic: mauticActivity.status === 'fulfilled' ? mauticActivity.value.data : null
    };
    
    res.json(profile);
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'api-gateway' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('API Gateway Error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

// Start server
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});

module.exports = app; // For testing