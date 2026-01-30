#!/bin/bash

# Script to restart backend services on VPS
# Run this script on your VPS at 102.215.228.243

echo "Stopping all backend services..."
docker-compose down

echo "Starting all backend services..."
docker-compose up -d

echo "Waiting 10 seconds for services to start..."
sleep 10

echo "Checking service status..."
docker-compose ps

echo "Checking database service logs..."
docker-compose logs database-service | tail -20

echo "Testing auth service health..."
curl -s http://localhost:3001/health

echo "Testing database connectivity..."
docker-compose exec database-service pg_isready -U postgres

echo "Backend restart complete. Check the output above for any issues."
