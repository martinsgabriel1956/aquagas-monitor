import swagger from '@fastify/swagger';
import fastifyMultipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import { fastify as server } from './lib/fastify.js';
import { env } from './utils/env.js';
import { appRoutes } from './routes/index.js';
import { serverLog } from './utils/server-log.js';
import { setURL } from './utils/url.js';

server.register(swagger, {
  openapi: {
    openapi: '3.0.0'
  }
})

const url = setURL("../..") + "/tmp";

server.register(fastifyMultipart, { attachFieldsToBody: true });
server.register(fastifyStatic, {
  root: url,
  prefix: '/tmp/',
})
server.register(appRoutes);

server.listen({
  port: env.API_PORT
}, serverLog)