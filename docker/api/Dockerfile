FROM node:lts-jessie

WORKDIR /home/node/app
COPY package*.json /home/node/app/
RUN npm install

CMD npm start
EXPOSE 9000
