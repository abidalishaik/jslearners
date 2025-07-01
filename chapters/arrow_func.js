// Functions

// function creation types
// 1. Function Declaration
function greet(name) {
  console.log("Hello, " + name + "!");
}
// 2. Function Expression
const greetExpression = function (name) {
  console.log("Hello, " + name + "!");
};
// 3. Arrow Function
const greetArrow = (name) => {
  console.log("Hello, " + name + "!");
};
// 4. Immediately Invoked Function Expression (IIFE)
(function (name) {
  console.log("Hello, " + name + "!");
})("John");

(() => {
  console.log(54352);
})();

// 5. Named Function Expression
const greetNamed = function namedGreet(name) {
  console.log("Hello, " + name + "!");
};

greetNamed("Alice");

function func(name) {
  // This is a function
  console.log("This is a function");
}

const arrowFunc = (name) => {
  // This is an arrow function
  console.log("This is an arrow function");
};

func("name"); // Calling the regular function
arrowFunc("name"); // Calling the arrow function

const addNumbers = (a, b) => a + b;
const result = addNumbers(5, 10);
console.log("Sum:", result); // Output: Sum: 15

// const addNumbers = (a, b) => {
//    return a + b;
// }

// const result = addNumbers(5, 10);
// console.log("Sum:", result); // Output: Sum: 15
