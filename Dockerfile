FROM node:current-slim

WORKDIR '/calendlyFrontend'

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3001

ENV HOST=0.0.0.0

CMD ["npm","start"]


