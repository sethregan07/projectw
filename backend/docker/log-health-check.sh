#!/bin/bash

# Enhanced Health Check Logger
# Logs detailed health information for all microservices

# Create log directory with proper permissions
mkdir -p logs/ && chmod 755 logs/
HEALTH_LOG="./logs/microservices-health.log"
TIMESTAMP=$(date '+%Y-%m-%d %H:%M:%S')

echo "[$TIMESTAMP] Starting comprehensive health check..." >> $HEALTH_LOG

# Function to check service health with detailed logging
check_service() {
    local service_name=$1
    local endpoint=$2
    local container_name=$3

    echo "[$TIMESTAMP] Checking $service_name..." >> $HEALTH_LOG

    # Check if container is running
    if docker ps --filter "name=$container_name" --filter "status=running" | grep -q $container_name; then
        echo "[$TIMESTAMP] ✓ Container $container_name is running" >> $HEALTH_LOG

        # Check health endpoint
        if curl -f --max-time 10 --silent "http://localhost$endpoint" > /dev/null 2>&1; then
            echo "[$TIMESTAMP] ✓ Health endpoint $endpoint responded OK" >> $HEALTH_LOG
            return 0
        else
            echo "[$TIMESTAMP] ✗ Health endpoint $endpoint failed" >> $HEALTH_LOG
            # Log container logs for debugging
            echo "[$TIMESTAMP] Last 5 lines of $container_name logs:" >> $HEALTH_LOG
            docker logs --tail 5 $container_name >> $HEALTH_LOG 2>&1
            return 1
        fi
    else
        echo "[$TIMESTAMP] ✗ Container $container_name is not running" >> $HEALTH_LOG
        echo "[$TIMESTAMP] Container status:" >> $HEALTH_LOG
        docker ps -a --filter "name=$container_name" --format "table {{.Names}}\t{{.Status}}" >> $HEALTH_LOG 2>&1
        return 1
    fi
}

# Check all services
FAILED_SERVICES=()

# API Gateway
if ! check_service "API Gateway" ":3000/health" "api-gateway"; then
    FAILED_SERVICES+=("api-gateway")
fi

# Auth Service
if ! check_service "Auth Service" ":3001/health" "auth-service"; then
    FAILED_SERVICES+=("auth-service")
fi

# Database Service
if docker ps --filter "name=database-service" --filter "status=running" | grep -q database-service; then
    echo "[$TIMESTAMP] ✓ Database container is running" >> $HEALTH_LOG
    # Test database connectivity
    if docker exec database-service pg_isready -U postgres > /dev/null 2>&1; then
        echo "[$TIMESTAMP] ✓ PostgreSQL is accepting connections" >> $HEALTH_LOG
    else
        echo "[$TIMESTAMP] ✗ PostgreSQL connection failed" >> $HEALTH_LOG
        FAILED_SERVICES+=("database")
    fi
else
    echo "[$TIMESTAMP] ✗ Database container is not running" >> $HEALTH_LOG
    FAILED_SERVICES+=("database")
fi

# Ghost Service
if ! check_service "Ghost CMS" ":2368/ghost/api/v3/admin/site/" "ghost-service"; then
    FAILED_SERVICES+=("ghost-service")
fi

# Mautic Service
if ! check_service "Mautic Marketing" ":8000/" "mautic-service"; then
    FAILED_SERVICES+=("mautic-service")
fi

# Monitoring Service (Prometheus)
if ! check_service "Prometheus" ":9090/-/healthy" "monitoring-service"; then
    FAILED_SERVICES+=("monitoring")
fi

# Logging Service (Elasticsearch)
if ! check_service "Elasticsearch" ":9200/_cluster/health" "logging-service"; then
    FAILED_SERVICES+=("elasticsearch")
fi

# Summary
echo "[$TIMESTAMP] Health check completed" >> $HEALTH_LOG
if [ ${#FAILED_SERVICES[@]} -eq 0 ]; then
    echo "[$TIMESTAMP] ✓ All services are healthy" >> $HEALTH_LOG
    exit 0
else
    echo "[$TIMESTAMP] ✗ Failed services: ${FAILED_SERVICES[*]}" >> $HEALTH_LOG
    exit 1
fi
