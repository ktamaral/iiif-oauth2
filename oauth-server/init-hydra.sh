#!/bin/bash

# Example of waiting for PostgreSQL to become available
# Adjust the command to fit your environment
echo "Waiting for PostgreSQL..."
until pg_isready -h postgresd -U hydra; do
  sleep 1
done

echo "Running Hydra Migrations..."
hydra migrate sql --yes $DSN

echo "Starting Hydra..."
exec hydra serve all
