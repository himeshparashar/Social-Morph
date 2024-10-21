FROM node:alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine AS production

WORKDIR /usr/src/app

COPY --from=build /usr/src/app/build /usr/src/app/build

COPY package*.json ./

RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "run", "start" ]
