FROM node:16 AS build-stage

USER node

WORKDIR /home/node

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

RUN npm ci --only-production

COPY --chown=node:node . .

ENV REACT_APP_BACKEND_URL=http://localhost:8080/api

RUN npm run build

FROM nginx:1.20.1

COPY --from=build-stage /home/node/build /etc/nginx/html