FROM node:16

USER node

WORKDIR /home/node

COPY --chown=node:node ./package.json ./package.json
COPY --chown=node:node ./package-lock.json ./package-lock.json

RUN npm ci --only-production

COPY --chown=node:node . .

CMD ["npm", "start"]