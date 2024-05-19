FROM node:lts-alpine
WORKDIR /app/notion-blog

RUN yarn install

COPY . .
CMD [ "yarn", "dev" ]
