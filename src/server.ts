import swagger from '@fastify/swagger';
import { fastify as server } from './lib/fastify.js';
import { env } from './utils/env.js';
import { appRoutes } from './routes/index.js';
import { serverLog } from './utils/server-log.js';

server.register(swagger, {
  openapi: {
    openapi: '3.0.0'
  }
})

server.register(appRoutes);

server.listen({
  port: env.API_PORT
}, serverLog)