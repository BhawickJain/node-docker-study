---
title: Node.JS Development with Docker
date: 06/03/2021 
author:
 - Bhawick Jain
or: 20210306150356
version: 0.1.0
URL: github.com/BhawickJain/node-docker-study
---

The aim is to gain a basic familiarisation of Node.js and how it can be developed within a Docker Container. The follow aims are met:
`[x]` Create a basic setup with Dockerfile and Docker-Compose  
`[x]` Make use of Nodemon to hot reload changes.  
`[x]` Create a rudimentary repo that captures the simplest setup necessary  
`[x]` Understand how package.json `scripts` are used to create enterypoints  

The following challenges were met:
`[x]` Hot reloads took too long to update  
`[x]` Nodemon does not restart within Docker Container  

Other things I learned:
`[ ]` alpine OS does not have bash so you need to open interactive tty via `/bin/bash`

## How to run

Given you inside the root folder, run `docker-compose up —build`
Ensure gRPC FUSE is turned off as it does not fly with raw fs updates which Nodemon relies on.

Additional questions:
`[?]` Jupyter Notebook instances run well when gRPC FUSE is turned on. Changes made within the web-app environment are smooth. Would this hold for when gRPC FUSE is closed?
`[?]` Running `npm install` with a package.json with Nodemon as a dependency still leads to Nodemon not being available when running the command afterwards. I have confirmed that Nodemon dependency is available just before calling nodemon. Only when I have a separate `npm install -g nodemon` present in the Dockerfile makes it available. In addition nodemon is not a production package and should be installed as a devDependency. It is also not clear is other packages installed via `package.json` will suffer the same issue, indicating an issue in my process.  
