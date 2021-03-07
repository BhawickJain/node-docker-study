// information about the app.js module
// console.log(module);

// When importing a module, node will first see if it is a module in the
// project if not found, it will then look for installed packages via npm

// import logger module, keep them at the top of the file in real dev
// same directory, load it as a constant
// const logger = require("./logger");

// prevents dumb things like:
// logger = 1;
// try changing the const to let and uncommenting the above

// move to parent direction and find logger
// kinda like cd .. in bash
// const logger = require("../logger");

// shows that logger contains a exports, which in this case is a function log.
// when url is exposed as endPoint in the logger.js you can see it too
// console.log(logger);
// logger.log("this-is-a-log-mesage-timestamp");

// IFFY Function are invoked immediately whilst other
// functions remain hidden as they have not be exported.
// every module is wrapped in an IFFY function.
// require("./iffyFunctions");

// const broken = require("./brokenModule");
// broken.functionExport();
// also note calling functionExport without () returns nothing
// broken.functionExport;

// Example of what global objects are.
// require("./globalObjects");

// Example of how Scheduling Timers are used
// const schedulingTimers = require("./schedulingTimers");

// Example of pathNodeAPI usage
const pathNodeAPI = require("./pathNodeAPI");
