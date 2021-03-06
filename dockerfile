FROM node:14.16.0-slim
# creates user/src/app directory tree if already there
RUN mkdir -p usr/src/app
# copy contents in ./app to within app folder
COPY ./app /usr/src/app
# cd to app folder
WORKDIR /usr/src/app
RUN npm install
RUN npm install -g nodemon