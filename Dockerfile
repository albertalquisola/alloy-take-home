FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npm install pm2 -g
RUN npm run build

CMD ["pm2-runtime","./dist/app.js"]

EXPOSE 3000