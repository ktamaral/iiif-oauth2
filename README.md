# iiif-oauth2

A minimalist set of microservices to demo oauth2 workflows for IIIF Authorization use cases.

# Local dev environment

## Environments

Copy the "{appname}.env.example" files in each microservice subdirectory.

Make a copy of the `consent-app.env.example.txt` file and rename it to `consent-app.env` in the consent-app directory of the project. Replace placeholder credentials. Repeat this process for all other microservices `oauth-server` and `postgresd`.

*Note: The *.env files may contain secrets and should never be committed to a repository.*

## Docker compose

Build and run docker images

```
docker compose up -d --build
```
