import fastify from 'fastify';
import swagger from '@fastify/swagger';
import { env } from './utils/env.js';

const server = fastify({
  logger: true
});

server.register(swagger, {
  openapi: {
    openapi: '3.0.0'
  }
})

server.listen({
  port: env.API_PORT
}, (err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }

  server.log.info(`server listening on ${address}`);
})