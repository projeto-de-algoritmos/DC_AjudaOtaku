 FROM node:latest

 WORKDIR /api

 COPY package.json /api
 
 RUN npm install
 
 COPY . /api

 EXPOSE 3001
 
 CMD [ "npm", "start" ]
