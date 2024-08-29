import { fastify } from "../lib/fastify.js";

export const serverLog = (err: Error | null, address: string) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }

  fastify.log.info(`server listening on ${address}`);
};