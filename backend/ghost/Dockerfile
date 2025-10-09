FROM ghost:5-alpine

# Set working directory
WORKDIR /var/lib/ghost

# Install MySQL client
RUN apk add --no-cache \
    mysql-client

# Expose Ghost port
EXPOSE 2368

# Use Ghost CLI to start Ghost
CMD ["node", "current/index.js"]