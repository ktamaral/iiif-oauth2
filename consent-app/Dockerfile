# Use Node.js buster-slim as the base image
FROM node:buster-slim

# Set the working directory in the container
WORKDIR /consent-app

# Install OpenSSL to generate a self-signed certificate
RUN apt-get update && \
    apt-get install -y openssl && \
    rm -rf /var/lib/apt/lists/*

# Generate a self-signed certificate
RUN mkdir /consent-app/cert && \
    openssl req -x509 -newkey rsa:4096 -sha256 -days 365 -nodes \
    -keyout /consent-app/cert/key.pem -out /consent-app/cert/cert.pem \
    -subj "/CN=localhost"

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
