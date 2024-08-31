import { FastifyInstance } from "fastify";
import fs from 'node:fs';
import { setURL } from "../utils/url.js";
import { model } from "../lib/genai.js";

export async function appRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    reply.send();
  })

  app.post("/upload", async (request, reply) => {
    const formData = await request.body;
    const url = setURL("../..") + '/tmp/';
    const files = await request.saveRequestFiles();
    const image = files[0];

    const prompt = "Extract the value of the image and format this value like a integer";

    function fileToGenerativePart(path: string, mimeType: string) {
      return {
        inlineData: {
          data: Buffer.from(fs.readFileSync(path)).toString("base64"),
          mimeType
        },
      };
    }

    const imagePart = fileToGenerativePart(url + image.filename, image.mimetype);

    const result = await model.generateContent([
      prompt,
      imagePart
    ])

      // "Conseguir retornar ao mercado de trabalho como dev Fullstack Junior até o final do ano."

      const resultResponse = result.response.text();
      const resultResponseJSON = JSON.stringify(resultResponse);
      const resultResponseFormatted = resultResponseJSON.replace(/"/g, "'").slice(27);

    reply.send();
    console.log({ result: resultResponseFormatted, formData });
  })

  app.patch("/confirm", async (request, reply) => {
    reply.send({ ok: true })
  })

  app.get("/:customerCode/list", async (request, reply) => {
    reply.send({ ok: true })
  })
}