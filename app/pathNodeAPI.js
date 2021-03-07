const path = require("path");

let filenameObject = path.parse(__filename);
console.log(filenameObject);

// the paath.parse returned object can give useful access
// to parts of the filepath. Great for server routing
// problems.
