# First stage: Generate self-signed certificate using debian:slim
FROM debian:buster-slim as cert-generator

# Install OpenSSL
RUN apt-get update && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

# Create directory for certificates
RUN mkdir /certs

# Copy the initialization script into the image
COPY ./init-hydra.sh /hydra/init-hydra.sh

# Make sure the script is executable
RUN chmod +x /hydra/init-hydra.sh

# Generate self-signed certificate
RUN openssl req -x509 -newkey rsa:4096 -nodes -keyout /certs/key.pem -out /certs/cert.pem -days 365 -subj "/CN=localhost"

# Second stage: Build Ory Hydra image with the generated certificate
FROM oryd/hydra:v2.2.0

# Copy the self-signed certificate and key from the cert-generator stage
COPY --from=cert-generator /certs /certs

# Set environment variables for Hydra to enable HTTPS
ENV HYDRA_SERVE_TLS_CERT_PATH=/certs/cert.pem
ENV HYDRA_SERVE_TLS_KEY_PATH=/certs/key.pem

# Expose ports for Hydra
EXPOSE 4444 4445
