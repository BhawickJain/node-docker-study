// Lets pretend this is a module that takes the logs produced by our app and send them to a logging service using an http request.

// you wouldn't expose the url for real
let url = "http://mylogger.io/log";
// module.exports.endPoint = url;

const log = (message) => {
  // Send an HTTP request
  console.log("POST: " + url + "/" + message);
};

// add log function to the exports{} as seen in console.log(module)
// if you just module.export = log you can invoke it in other places
// by logger = require("./logger")
// logger(message) instead of logger.log as made below

module.exports.log = log;
