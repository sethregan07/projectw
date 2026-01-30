FROM node:18-alpine

WORKDIR /app

# Install dependencies
RUN apk add --no-cache bash

# Copy package files
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 8000

# Start command
CMD ["npm", "start"]