FROM node:14.16.0-slim
# creates user/src/app directory tree if already there
RUN mkdir -p usr/src/app
WORKDIR /usr/src/app
# copy package.json in ./app to within app folder
# you copy only this to save time and reduce size of docker image
COPY ./app/package.json /usr/src/app
# cd to app folder
RUN npm install