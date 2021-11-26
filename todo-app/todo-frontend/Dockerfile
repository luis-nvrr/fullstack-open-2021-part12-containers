FROM node:16 AS build-stage

USER node

WORKDIR /home/node

COPY --chown=node:node . .

RUN npm ci

ENV REACT_APP_BACKEND_URL=http://localhost:4004

RUN npm run build

FROM build-stage as test-stage

ENV CI=true

RUN ["npm", "test"]

FROM nginx:1.20-alpine

COPY --from=test-stage /home/node/build /usr/share/nginx/html