FROM node:16.13.2-alpine3.14

WORKDIR telescope

COPY docusaurus.config.js .
COPY babel.config.js .
COPY package.json .

COPY static/ ./static/
COPY docs/ ./docs/
COPY src/ ./src/

RUN yarn install
