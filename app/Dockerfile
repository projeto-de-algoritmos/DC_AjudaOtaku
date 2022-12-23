FROM node:latest

WORKDIR /app

COPY package.json yarn.lock /

RUN yarn install --pure-lockfile

COPY . /app

EXPOSE 3000

CMD ["yarn","start"]