#!/bin/bash

echo "Cleaning up..."

# Kill any process using frontend port 5002
lsof -ti:5002 | xargs kill -9 2>/dev/null || true

# Clean up docker containers and orphans
cd backend/microservices

# Create a dev version without frontend service to avoid conflict
sed '/^  frontend:/,/^  # [^ ]/ { /  frontend:/d; /\(^  # API Gateway\|^  # Authentication\|^  # Ghost\|^  # Mautic\|^  # Database\|^  # Monitoring\|^  # Logging\|^  # Tracing\)/!d; }' docker-compose.yml > dev-compose.yml

docker-compose down --volumes --remove-orphans

echo "Starting frontend in background..."
cd ../..
npm run dev &

echo "Starting backend services..."
cd backend/microservices

docker-compose -f dev-compose.yml up --build

# Clean up dev file
rm dev-compose.yml
