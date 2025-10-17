#!/bin/bash
set -e

# If the data directory is empty or doesn't exist (first run), initialize
if [ -z "$(ls -A /var/lib/postgresql/data)" ]; then
    echo "Data directory is empty, running initdb..."
    exec original-docker-entrypoint.sh postgres
else
    echo "Data directory exists, starting PostgreSQL with existing data..."
    # If data exists, don't run init scripts, just start postgres
    exec postgres
fi
