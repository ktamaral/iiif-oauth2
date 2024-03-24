# iiif-oauth2

A minimalist set of microservices to demo oauth2 workflows for IIIF Authorization use cases.

## Demo only

This app is for demonstration purposes only and is not intended for Production. Proper configuration and password management, TLS connections and more will be required for a production deployment.

# Local dev environment

## Environments

### OAuth server

The oauth-server container is running an open-source oauth server called Hydra. Read more about the [docker compose setup on the ORY Hydra website](https://www.ory.sh/docs/hydra/5min-tutorial). 

Ensure the DSN environment variable for Hydra is correctly pointing to the PostgreSQL service. The DSN should match the service name and credentials of the PostgreSQL container.

`config/hydra.yml`

`dsn: postgres://auth:secret@auth-db:5432/auth?sslmode=disable&max_conns=20&max_idle_conns=4`

### Consent app

Copy the "{appname}.env.example" files in each microservice subdirectory.

Make a copy of the `consent-app.env.example.txt` file and rename it to `consent-app.env` in the consent-app directory of the project. Replace placeholder credentials.

The hostnames, ports, and credentials must be configured to connect the microservices on the internal docker network.



## Docker compose

Build and run docker images

```
docker compose up -d --build
```
