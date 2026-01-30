# Use the official PostgreSQL image as the base image
FROM postgres:15-alpine

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_MULTIPLE_DATABASES="auth_db,ghost_db,mautic_db,analytics_db"

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/
COPY setup-multiple-dbs.sh /docker-entrypoint-initdb.d/

# Make the script executable
RUN chmod +x /docker-entrypoint-initdb.d/setup-multiple-dbs.sh

# Set the working directory
WORKDIR /var/lib/postgresql/data

# Expose the PostgreSQL port
EXPOSE 5432

# Add health check
HEALTHCHECK --interval=10s --timeout=5s --start-period=10s --retries=5 \
  CMD pg_isready -U postgres || exit 1

# Set volume for persistent data
VOLUME ["/var/lib/postgresql/data"]