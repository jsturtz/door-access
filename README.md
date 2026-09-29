# JavaScript Studios Portal

This is a full-stack application to serve as the public-facing
website for JavaScript Studios.

We use Docker to containerize the app for development and production.

The frontend uses React with TypeScript. See [apps/web/README.md](./apps/web/README.md) for more info.

The backend uses the NestJS framework. See [apps/api/README.md](./apps/api/README.md) for more info.


## Developer Notes

### Dependencies
- [Docker Desktop](https://docs.docker.com/desktop/)
    - Tested on Docker version 29.8.1, build 4a63305

### Running full production setup
- start docker:

```bash
docker compose up -d
```

- navigate in browser to `http://localhost`. Should see result of API 