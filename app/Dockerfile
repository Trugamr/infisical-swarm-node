FROM node:20.14.0-alpine3.20 as base

RUN corepack enable

####################

FROM base as runner

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm --frozen-lockfile install --prod

COPY . .

EXPOSE 8000

CMD ["node", "index.js"]