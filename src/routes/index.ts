import { FastifyInstance } from "fastify";

export async function appRoutes(app: FastifyInstance) {
  app.post("/upload", async (request, reply) => {
    reply.send({ ok: true })
  })

  app.patch("/confirm", async (request, reply) => {
    reply.send({ ok: true })
  })

  app.get("/:customerCode/list", async (request, reply) => {
    reply.send({ ok: true })
  })
}