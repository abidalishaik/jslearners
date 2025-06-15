// // Question 1//
// function Add(a, b) {
//   return a + b;
// }

// function subtract(a, b) {
//   return a - b;
// }
// console.log("Add:", Add(40, 56));
// console.log("Subtract:", subtract(26, 2));

// function calculate(x, y, operator) {
//   if (typeof x !== "number" || typeof y !== "number") {
//     return "Both inputs must be numbers";
//   }
//   if ((x < 10 && x > 100) || (y < 10 && y > 100)) {
//     return "Both inputs must be between 10 and 100";
//   }
//   switch (operator) {
//     case "*":
//       return x * y;
//     case "/":
//       return x / y;
//     case "+":
//       return x + y;
//     case "-":
//       return x - y;
//     default:
//       return "Invalid operator";
//   }
// }
// console.log("Multiply:", calculate(25, 6, "*"));
// console.log("Divide:", calculate(30, 5, "/"));

// //question 3
// const numbers = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < numbers.length; i++) {
//   console.log("Number:", numbers[i]);
// }
// const strings = ["abid", "swaliha", "ayan"];
// for (let i = 0; i < strings.length; i++) {
//   console.log("String:", strings[i]);
// }

// question 2
function addFunction(p, q) {
  if (typeof p !== "number" || typeof q !== "number") {
    return "Both inputs must be numbers";
  }
  if (p >= 10 || p <= 100 || q >= 10 || q <= 100) {
    return p + q;
  }
  return "Both inputs must be between 10 and 100";
}
// console.log("Add Function:", addFunction(69, 96));

//  here obj means array of numbers
function performOperation(arr, operator) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All elements in the array must be numbers";
    }
    switch (operator) {
      case "+":
        result += arr[i];
        break;
      case "-":
        result -= arr[i];
        break;
      case "*":
        result *= arr[i];
        break;
      case "/":
        if (arr[i] === 0) {
          return "Division by zero is not allowed";
        }
        result /= arr[i];
        break;
      default:
        return "Invalid operator";
    }
  }

  return result;
}

// console.log(performOperation("hjkd", "+")); // Output: 10
// console.log(performOperation([], "-")); // Output: 3
// console.log(performOperation([2, 3, 4], "*")); // Output: 24
// console.log(performOperation([20, 5, 2], "/")); // Output: 2

for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5");
    break; // This will exit the loop when i is 5
  }
  console.log("Current number:", i);
}

function addArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All elements in the array must be numbers";
    }
    sum += arr[i];
  }
  return sum;
}

function subtractArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array";
  }
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All elements in the array must be numbers";
    }
    result -= arr[i];
  }
  return result;
}
