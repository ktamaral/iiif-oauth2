# iiif-oauth2

An open-source OAuth server to demo OAuth2 workflows for IIIF Authorization use cases.

## Demo only

This app is for demonstration purposes only and is not intended for Production. Proper configuration and password management, TLS connections and more will be required for a production deployment.

## OAuth server

The docker compose file in this project runs a PostgreSQL database and an open-source oauth server called Hydra.

Read more about Hydra
* [Tutorial](https://www.ory.sh/docs/hydra/5min-tutorial).
* [Production](https://www.ory.sh/docs/hydra/self-hosted/production)

#### OAuth API

Admin

```
curl http://localhost:4445/admin/clients
```

# Local dev environment

## Quick Start

### Docker compose

Build and run docker images

```
docker compose up -d --build
```

### Config

`config/hydra.yml`

Ensure the DSN environment variable for Hydra is correctly pointing to the PostgreSQL service. The DSN should match the service name and credentials of the PostgreSQL container.

```
dsn: postgres://auth:secret@auth-db:5432/auth?sslmode=disable&max_conns=20&max_idle_conns=4
```

## Consent App

The [IIIF OAuth2 Consent App](https://github.com/ktamaral/iiif-oauth2-consent) is the User Interface that accepts user input and sends login requests to the OAuth server. Start the OAuth server first and then run the consent app using the instructions in the README.
