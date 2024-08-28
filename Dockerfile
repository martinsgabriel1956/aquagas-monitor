FROM node:20-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

RUN apk update && apk add bash

COPY package*.json ./
COPY pnpm-lock.yaml ./
COPY prisma ./prisma/

RUN corepack enable
RUN pnpm install

COPY . .

CMD ["pnpm", "start"]