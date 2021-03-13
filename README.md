---
title: Node.JS Development with Docker
date: 13/03/2021 
author:
 - Bhawick Jain
or: 20210313094159
URL: github.com/BhawickJain/node-docker-study
---

Aim is to setup a small application that uses node.js and a database to understand how to connect applications within a docker-compose network.

## demo app - developing with Docker

This demo app shows a simple user profile app set up using 
- index.html with pure js and css styles
- nodejs backend with express module
- mongodb for data storage

`[x]` Annotate every part of the code to explain the function of each.  
`[ ]` Add another attribute to the profile like Job or Places visited  
`[x]` Even if the `my-db` and the `users` collection is present in MongoDB these are automatically created (for now) by the update-profile app.  
`[ ]` Debug a network issues where MongoDb and MongoExpress could communicate under the Docker-Compose network but my-app could not. Problem was `server.js` MongoDb connect method could not access mongodb IP provided due to a bad variable.  

Generally I think this example is very terse and hard to read, the js scripts and css should be separated from the html page. The `server.js` should only be invoking Mongo Connect methods which then call specific Mongo functions, currently it very hard to understand what is happening. There are hard-coded values as well.
`[ ]`  Refactor and organise code. Gives you a chance to understand it better.  
`[ ]` Create `./functions/mongodb.js` file which has all the MongoDb APIs  
`[ ]` Get more comfortable with HTML,CSS and JS manipulations.  
`[ ]` Create a Development Container of this with Nodemon. Investigate docker-compose.dev  

### With Docker Compose

`docker-compose up --build`  
`docker-compose down --rmi all -v`

to keep the database data but remove the images  
`docker-compose down --rmi all`
