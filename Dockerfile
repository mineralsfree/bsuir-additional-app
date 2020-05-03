FROM node:12.14.1

WORKDIR /usr/bsuirapi

COPY package*.json ./

RUN rm -rf node_modules && npm ci

COPY . .

RUN npm run build


ENTRYPOINT [""]
