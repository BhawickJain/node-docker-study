// Each module is wrapped in an IFFY function like so

// (function (exports, require, module, __filename, _dirname){
//     /* your module contents */
// })();

// example import
const logger = require("./logger");

// example export
const functionExport = () => {
  console.log("some function");
};

module.exports.functionExport = functionExport;

// To Demo this
console.log(`__filename = ${__filename}`);
console.log(`exports = ${exports}`);
console.log(`require = ${require}`);
console.log(`__dirname = ${__dirname}`);

// also note calling functionExport without () returns nothing
functionExport;
