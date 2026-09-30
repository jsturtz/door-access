import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  
  // NestFactory can be called with a type that specifes the middleware that handles http: 
  // const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // What this does is expose *platform specific* functionality to app
  // So in this case, it makes the Express api available to app
  // Out of the box, Nest supports Express and Fastify. Any other adapter could be made

  // The point of `app` object is to act as a central orchestrator for the whole application
  // 1. It handles global middleware / infrastructure
  // 2. It handles lifecycle / server management, e.g. shutting down gracefully
  // 3. It stores the Dependency Injection container
  const app = await NestFactory.create(AppModule, {
    // if two routes share an identical method, path, host, or version
    // then this is a duplicate and is treated as an error
    // if two route patterns can match teh same request, e.g. /users/me and /users/:id
    // then this is a shadow and gives a warning
    routeConflictPolicy: { duplicate: 'error', shadow: 'warn' },
  });

  await app.listen(process.env.PORT ?? 3000);
}
await bootstrap();
