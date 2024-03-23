# iiif-oauth2

A minimalist set of microservices to demo oauth2 workflows for IIIF Authorization use cases.

# Local dev environment

## Environments

Copy the "{appname}.env.example" files in each microservice subdirectory.

Make a copy of the `consent-app.env.example.txt` file and rename it to `consent-app.env` in the consent-app directory of the project. Replace placeholder credentials. Repeat this process for all other microservices `oauth-server` and `postgresd`.

The hostnames, ports, and credentials must be configured to connect the microservices on the internal docker network.

The oauth-server container is running an open-source oauth server called Hydra. Ensure the DSN environment variable for Hydra is correctly pointing to the PostgreSQL service. The DSN should match the service name and credentials of the PostgreSQL container.

`postgres://hydra:secret@postgresd:5432/hydra?sslmode=disable`

*Note: The *.env files may contain secrets and should never be committed to a repository.*

## Docker compose

Build and run docker images

```
docker compose up -d --build
```
