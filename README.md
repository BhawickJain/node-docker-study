---
title: Why mount the Node_module folder in docker-compose
date: 07/03/2021 
author:
 - Bhawick Jain
or: 20210307093152z
version: 0.1.0
URL: github.com/BhawickJain/node-docker-study
---

Demonstrates that without a bind-less mount to the `node_modules` folder, the image build's package installation is overlaid by the host's `node_modules` directory which is empty.
The Bind-less mounting is defined within the `docker-compose.yml`, try running it commented out or uncommented to see the effect and potential confusion it caused.

`[ ]` Explore a more technical explanation of the problem.  
`[ ]` Explore any specific technical details that provide a better explanation. An excellent [Stackoverflow explananation](https://stackoverflow.com/questions/30043872/docker-compose-node-modules-not-present-in-a-volume-after-npm-install-succeeds) has been provided but refers to Docker's Standard Volumes documentation for any further referece.  

## How to run

Given you're at the root directory of the folder run `docker-compose up --build` and check docker logs and `localhost:8080/`. 
Shut down and clean by command `docker-compose down -v --rmi all` && `docker-compose rm` for good measure.
