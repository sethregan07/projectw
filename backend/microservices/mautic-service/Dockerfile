FROM php:8.1-alpine

WORKDIR /app

# Install dependencies
RUN apk add --no-cache \
    bash \
    nodejs \
    npm

# Copy package files
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 80

# Start command
CMD ["npm", "start"]