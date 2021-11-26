FROM node:16

USER node

WORKDIR /home/node

COPY --chown=node:node . .

RUN npm ci

ENV PORT=4000

CMD ["npm", "start"]