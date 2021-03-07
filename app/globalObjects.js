// Demonstrates how Global is a fundmental provider of
// functions and methods, much like Window in browsers.

// Example of a function body
const sayHello = (name) => {
  return "Hello " + name;
};

// a global object
console.log(sayHello("Bhawick"));

global.console.log(
  "Console.Log method belongs to the global object which is a globally available within Node.js"
);

let name_var = "Bhawick";

// declared functions and variables are scoped to app.js
console.log(
  "Variables and Function I define here are not added to the global object hence `name` = " +
    global.name_var
);
