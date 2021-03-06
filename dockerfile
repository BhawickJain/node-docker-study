FROM node:14.16.0
RUN mkdir -p usr/src/app
COPY ./app /usr/src/app
WORKDIR /usr/src/app
RUN npm install