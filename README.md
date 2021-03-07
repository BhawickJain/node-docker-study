---
title: Node.JS Development with Docker
date: 07/03/2021 
author:
 - Bhawick Jain
or: 20210307094514z
version: 0.1.0
URL: github.com/BhawickJain/node-docker-study
---

Takes code from `server-docker-1` and build on it to further Node.js.

`[x]` Write an example of a function body  
`[x]` How to import and create your own modules  
`[x]` Introduction to the Path Node API  

There is a `global` object which has a number of methods: `setTimeout()`, `clearTimeout()`, `console.log`. The window is usually not declared. For browsers, there is the equivalent `window` object.

You avoid using global scopes as names and functions scoped globally will be overidden by the last declaration, which is confusing and leads to having to understand the entire code based.

Modules are core to Node.js, each file is a module and you need to `export` them to make them available to other places.

use jshint to catch issues in your code. You need to install jshint globally as bash doesn't seem to find any of the projects installed by npm during the image build.
`[x]` Installed JS Hint and tried it. It needs to be installed globally.  
`[ ]` Find a way to change the path variables in the Linux Bash to look for `node_modules` installed within the project instead of the global directories. I have tried `export NODE_PATH=usr/src/app/node_modules` without any effect. In fact this variable is empty before this, so bash is unlikely to be informing itself with that variable.  


Each module is wrapped in an immediately invoked function expressed (IFFY) which is basically a function but wrapped as `(/* function*/)()` enabling no assignment to a variable. It means you can invoke something immediately without reveal the variables inside the function. Examples function and arrow function:

```
(function() {
    console.log("iffy function");
})()

const normalFunc = function() {
    console.log("normal function");
}

(() => {
    console.log("iffy arrow function");
})()

const arrowFunc = () {
    console.log("arrow function");
}

```

Each module is wrapped in a IFFY with special variables like so:

```
(function (exports, require, module, __filename, __dirname) {
  /* module contents you've written */
})();
```
