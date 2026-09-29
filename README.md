# Door Access Demo

This is a full-stack application to allow users to access doors in buildings

We use Docker to containerize the app for development and production.

The frontend uses React with TypeScript. See [apps/web/README.md](./apps/web/README.md) for more info.

The backend uses the NestJS framework. See [apps/api/README.md](./apps/api/README.md) for more info.


## Developer Notes

### Dependencies
- [Docker Compose](https://docs.docker.com)
    - Tested on Docker version 29.1.3, build 29.1.3-0ubuntu3~24.04.2

### Running full production setup
- start docker:

```bash
docker compose up -d
```

- navigate in browser to `http://localhost`. Should see result of API 