FROM node:20.11.0-alpine3.18 
WORKDIR /app/notion-blog

# COPY package.json yarn.lock ./
RUN yarn install

COPY . .
CMD ["yarn", "dev"]