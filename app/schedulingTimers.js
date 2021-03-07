// example of the schedulingTimers module available within Node

const logger = require("./logger");

// setInterval for logger.log("Messsage")
setInterval(logger.log, 1000, "message");
