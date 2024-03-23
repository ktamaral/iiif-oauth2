# Use Node.js buster-slim as the base image
FROM node:buster-slim

# Create app directory
WORKDIR /consent-app

# Install OpenSSL to generate a self-signed certificate
RUN apt-get update && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

# Generate a self-signed certificate
# Certificates will be generated in a globally readable directory
RUN mkdir -p /usr/local/share/ca-certificates/consent-app && \
    openssl req -x509 -newkey rsa:4096 -sha256 -days 365 -nodes \
    -keyout /usr/local/share/ca-certificates/consent-app/key.pem -out /usr/local/share/ca-certificates/consent-app/cert.pem \
    -subj "/CN=localhost" && \
    chown -R node:node /usr/local/share/ca-certificates/consent-app

# Node uses an unprivileged user 'node' by default in their official images, so we reuse it
# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Change ownership of the app directory to the 'node' user
COPY --chown=node:node . .

# Switch to 'node' user
USER node

# The app listens on port 3000, so expose it
EXPOSE 3000

# Define the command to run the app
CMD [ "npm", "start" ]
