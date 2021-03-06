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

`[x]` Make use of Dev-Dependencies  
Dev Dependencies are installed by `npm install "[package-name]" -D"` and are installed by default when you `npm install`. You can omit dev dependencies by `npm install --production`.

The following challenges were met:  
`[x]` Hot reloads took too long to update  
`[x]` Nodemon does not restart within Docker Container  

Other things I learned:  
`[x]` alpine OS does not have bash so you need to open interactive tty via `/bin/bash`  

`[x]` Under certain conditions, `docker-compose up` can hang when stating `attaching to` node.  
This is because of an issue with docker and macOS, combined with the use of a port that is in use. I was using port 8080 which in later runs was busy. It is best to check if the port you want to use is free and if `docker-compose up` is hanging, ensure all caches are cleared, images are removed, redundant files are deleted and docker is restarted. Last resort maybe a restart of the laptop is the `fseventd` is rampant. Initial suspicion that deleting the `node_modules` folder was responsible was incorrect. In the current up commands, no issues have been and tried against various local and container port bindings.

## How to run

Given you inside the root folder, run `docker-compose up —build`
Ensure gRPC FUSE is turned off as it does not fly with raw fs updates which Nodemon relies on.

Additional questions:  
`[?]` Jupyter Notebook instances run well when gRPC FUSE is turned on. Changes made within the web-app environment are smooth. Would this hold for when gRPC FUSE is closed?  

`[?]` Running `npm install` with a package.json with Nodemon as a dependency still leads to Nodemon not being available when running the command afterwards. I have confirmed that Nodemon dependency is available just before calling nodemon. Only when I have a separate `npm install -g nodemon` present in the Dockerfile makes it available. In addition nodemon is not a production package and should be installed as a devDependency. It is also not clear is other packages installed via `package.json` will suffer the same issue, indicating an issue in my process.  

This is because I was installing my packages while building my docker image which involves created a node_modules folder within my `./usr/src/app` directory. But when I mounted the same folder (which didn't have the `node_modues` installed) back in as `./app:/usr/src/app` it would erease the packages. This meant Nodemon was not availabel along with any other packages required for the project to run. The solution is to mount the container's `node_modules` path as seen in the `docker-compose.yml` _without a host binding_ which would prevent the app folder overlay to hide that folder.  

Another interesting point is that the `node_modules` folder in the container has the packages popuated whilst the `node_modules` folder on the host has none. Which shows that there no binding but some aspects of the file systems requires an equivalent folder to remain. Of course this can be deleted after the process is shutdown without any side-effects later. I have included it has part of `.dockerignore` for good measure.  

`[ ]` Explore any specific technical details that provide a better explanation. An excellent [Stackoverflow explananation](https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds) has been provided but refers to Docker's Standard Volumes documentation for any further referece.  

Additional Tasks:
`[ ]` Nodemon can also be used to watch and hot reload other programs like those written in python. [See running non-node scripts](https://www.npmjs.com/package/nodemon).  
