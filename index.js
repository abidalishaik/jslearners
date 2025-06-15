// 1.1 variables

// x = 5;
// y = 6;
// z = x + y;
// console.log(z);

// abc = 10;

// console.log(abc + 10);
// 1.2 variables with let and const

// var x = 5;
// var y = 6;
// x = 10; // reassigning a variable declared with var
// y = 20; // reassigning a variable declared with var
// var z = x + y;

// console.log(z);

// let x = 5;
// let y = 6;
// x = 10; // reassigning a variable declared with let
// y = 20; // reassigning a variable declared with let
// let z = x + y;

// console.log(z);

// const x = 78;
// const y = "hwdb";
// console.log(typeof x); // number
// console.log(typeof "sh"); // string

// const y = 6;
// x = 10; // This will throw an error because x is a constant
// y = 20; // This will throw an error because y is a constant
// const z = x + y;

// console.log(z);

// --------------------------------------------------------------------------------

// JavaScript has 8 Datatypes
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt
// 8. Object

// 1. Number
// let num = 10;
// console.log(typeof num); // number
// // 2. String
// let str = "Hello, World!";
// console.log(typeof str); // string
// // 3. Boolean
// let isTrue = true;
// console.log(typeof isTrue); // boolean
// // 4. Undefined
// let undef;
// console.log(typeof undef); // undefined
// // 5. Null
// let empty = null;
// console.log(typeof empty); // object (this is a known quirk in JavaScript)
// // 6. Symbol
// let sym = Symbol("description");
// console.log(sym); // Symbol(description)
// console.log(typeof sym); // symbol
// // 7. BigInt
// let bigIntNum = BigInt(1234567890123456789012345678901234567890);
// console.log(typeof bigIntNum); // bigint
// // 8. Object
// let obj = { name: "John", age: 30 };
// console.log(typeof obj); // object

// --------------------------------------------------------------------------------

// js operators

// console.log(2 + 2); // 4
// console.log(2 - 2); // 0
// console.log(2 * 2); // 4
// console.log(2 / 2); // 1
// console.log(2 % 2); // 0
// console.log(2 ** 2); // 4 (Exponentiation operator)
// console.log(2 + 2 * 2); // 6 (Multiplication before addition)
// console.log((2 + 2) * 2); // 8 (Parentheses change the order of operations)
// console.log(2 + 2 - (2 * 2) / 2); // 2 (Following the order of operations)
// console.log(2 + 2 - 2 * (2 / 2)); // 2 (Parentheses change the order of operations)

// let x = 5;
// x += 2; // x = x + 2
// console.log(x); // 7

// console.log(5 == 5); // true (Equality operator)
// console.log(5 != 5); // false (Inequality operator)
// console.log(5 === 5); // true (Strict equality operator)
// console.log(5 !== 5); // false (Strict inequality operator)
// console.log(5 > 3); // true (Greater than operator)
// console.log(5 < 3); // false (Less than operator)
// console.log(5 >= 5); // true (Greater than or equal to operator)
// console.log(5 <= 5); // true (Less than or equal to operator)
// console.log(5 > 3 && 3 < 5); // true (Logical AND operator)
// console.log(5 > 3 || 3 > 5); // true (Logical OR operator)
// console.log(!(5 > 3)); // false (Logical NOT operator)
// console.log(5 == "5"); // true (Type coercion, loose equality)
// console.log(5 === "5"); // false (Strict equality, no type coercion)
// console.log(5 != "5"); // false (Type coercion, loose inequality)
// console.log(5 !== "5"); // true (Strict inequality, no type coercion)
// console.log(5 > 3 ? "5 is greater than 3" : "5 is not greater than 3"); // Ternary operator
// console.log((5 > 3 && 3 < 5) ? "5 is greater than 3" : "5 is not greater than 3"); // Ternary operator
// console.log(5 < 3 ? "5 is less than 3" : "5 is not less than 3"); // Ternary operator

// -----------------------------------------------------------------------------------

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

function nameOfFunction() {
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
  console.log("Hello, World!");
}

// nameOfFunction(); // Calling the function

function addNumbers(a, b) {
  console.log(a);
  console.log(b);
  return a + b; // Returning the sum of a and b
}

// console.log(addNumbers(15, 110)); // Calling the function with arguments 5 and 10
// console.log(addNumbers(13279, 110328)); // Calling the function with arguments 5 and 10
let v = "function";

// if (typeof addNumbers === v) {
//   console.log(addNumbers(15, 110)); // Calling the function with arguments 5 and 10
// }

// (function name(a, b) {
//   console.log(a + b);
// })(1, 2); // Immediately Invoked Function Expression (IIFE)

function printHello(name) {
  console.log("sh");
  if (!name) {
    return "Name is required!";
  } else {
    console.log("Name is provided");
  }
  return "Hello " + name + "!"; // Concatenating strings
  console.log(123); // This line will never be executed because it comes after the return statement
}
// let result = printHello("John"); // Calling the function with the argument "John"
// let res = printHello;
// console.log(res("John")); // This will print "Hello, John!" to the console
// console.log(result); // This will print "Hello, John!" to the console
// console.log(printHello("John")); // This will print "Hello, John!" to the console
// console.log(printHello("abid")); // This will print "Name is required!" to the console

// if (result === "Hello John!") {
//   console.log("Function returned the expected value.");
// } else if (result === "Name is required!") {
//   console.log("Function returned the unexpected value.");
// }

// ----------------------------------
// IF ELSE

// let age = 18;
// if (age >= 18 && age < 60) {
//   console.log("You are an adult.");
// } else if (age >= 13) {
//   console.log("You are a teenager.");
// } else {
//   console.log("You are a child.");
// }

// switch (age) {
//   case 18:
//     console.log("You are 18 years old.");
//     break;
//   case 15:
//     console.log("You are 15 years old.");
//     break;
//   default:
//     console.log("You are not 18 or 15 years old.");
// }

// --------- LOOPS -----------

function printName(name) {
  console.log("Hello, " + name + "!");
}

// for (let i = 0; i < 5; i++) {
//   printName("Abid");
// }

// let i = 0;
// while (i < 0) {
//   console.log(i);
//   printName("Abid");
//   i++;
// }

// do {
//   console.log(i);
//   printName("Abid");
//   i++;
// } while (i < 0); // This will execute at least once even if the condition is false

const names = ["Alice", "Bob", "Charlie"];

// console.log(names[0]); // Accessing the first element of the array
// console.log(names[1]); // Accessing the second element of the array
// console.log(names[2]); // Accessing the third element of the array
// console.log(names.length); // This will print the number of parameters the function takes

for (let i = 0; i < names.length; i++) {
  if (i == 1) continue;
  // console.log(i);
  // console.log("Hello, " + names[i] + "!");
}

for (const element of names) {
  console.log("Hello, " + element + "!");
}

const obj = {
  name: "Alice",
  age: 30,
  city: "New York",
};

for (const key in obj) {
  if (key === "age") {
    // console.log(typeof key, key); // Accessing each key in the object
    // console.log(obj[key]); // Accessing the value of each key in the object
    // console.log(key + ": " + obj[key]); // Accessing the value of each key in the object
  }
}

//  ------------ Objects ------------
// Creating an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
  country: "INDIA",
};

// Accessing object properties
// console.log(person.name); // Output: John
// console.log(person["name"]); // Output: 30
// Adding a new property to the object
person.country = "USA";
person["occupation"] = "Engineer";
// console.log(person); // Output: { name: 'John', age: 30, city: 'New York', country: 'USA', occupation: 'Engineer' }
// Deleting a property from the object
delete person.age;
// console.log(person); // Output: { name: 'John', city: 'New York', country: 'USA', occupation: 'Engineer

const person2 = {
  name: "Alice",
  age: 25,
  city: "Los Angeles",
  greet: function (name, age) {
    if (age < 0 || age > 120) {
      return "Invalid age provided.";
    }
    console.log(
      "Hello, my name is " + name + " and I am " + age + " years old."
    );
    return "Hello, my name is " + name + " and I am " + age + " years old.";
  },
};

// Calling the method
const result = person2.greet("Unknown", 17);
console.log(result); // Output: Hello, my name is Unknown and I am 104223 years old.
// Adding a new method to the object
person2.introduce = function (name, city) {
  console.log("Hi, I'm " + name + " from " + city + ".");
};
// Calling the new method
person2.introduce("Alice", "Los Angeles"); // Output: Hi, I'm Alice from Los Angeles.

// ----- nested objects -----

// Creating a nested object
const student = {
  name: "John",
  age: 20,
  subjects: {
    math: {
      score: 90,
      teacher: "Mr. Smith",
      greet: function () {
        // This function will greet the teacher and return a message
        if (typeof this.teacher !== "string") {
          return "Teacher's name must be a string.";
        }
        // Check if the teacher is available
        if (!this.teacher) {
          return "Teacher is not available.";
        }
        console.log("Hello, I am " + this.teacher + " and I teach Math.");
        const obj = {
          name: "Abid",
          age: 20,
          greet: function () {
            console.log(
              "Hello, I am " +
                this.name +
                " and I am " +
                this.age +
                " years old."
            );
          },
        };
        return "Hello, I am " + this.teacher + " and I teach Math.";
      },
    },
    science: {
      score: 85,
      teacher: "Ms. Johnson",
    },
  },
};

// Accessing nested object properties
// console.log(student.subjects.math.score); // Output: 90
// console.log(student.subjects.science.teacher); // Output: Ms. Johnson
// student.subjects.math.teacher = 173; // Output: Ms. Johnson
// console.log(student.subjects.math.greet()); // Output: Hello, I am Mr. Smith and I teach Math.

// Adding a new subject
student.subjects.english = {
  score: 88,
  teacher: "Mr. Brown",
};
console.log(student.subjects); // Output: { math: { score: 90, teacher: 'Mr. Smith' }, science: { score: 85, teacher: 'Ms. Johnson' }, english: { score: 88, teacher: 'Mr. Brown' }
// console.log(student.subjects.english); // Output: { score: 88, teacher: 'Mr. Brown' }
// Deleting a subject
delete student.subjects.science;
// console.log(student.subjects.science); // Output: undefined
// console.log(student); // Output: { name: 'John', age: 20, subjects: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } } }
// Adding a new property to the student object
student.grade = "A";
// console.log(student.grade); // Output: A
// console.log(student); // Output: { name: 'John', age: 20, subjects: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }, grade: 'A' }
// console.log(student.subjects); // Output: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }
// console.log(student.subjects.math); // Output: { score: 90, teacher: 'Mr. Smith' }
// console.log(student.subjects.english); // Output: { score: 88, teacher: 'Mr. Brown' }
// console.log(student.subjects.math.score); // Output: 90
// console.log(student.subjects.english.teacher); // Output: Mr. Brown
// console.log(student.subjects.math.teacher); // Output: Mr. Smith
// console.log(student.subjects.english.score); // Output: 88
// console.log(student.subjects.math.teacher); // Output: Mr. Smith
// console.log(student.subjects.english.score); // Output: 88
// console.log(student.subjects.math.score); // Output: 90
// console.log(student.subjects.english.teacher); // Output: Mr. Brown
// console.log(student.subjects.math); // Output: { score: 90, teacher: 'Mr. Smith' }
// console.log(student.subjects.english); // Output: { score: 88, teacher: 'Mr. Brown' }
// console.log(student.subjects); // Output: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }
// console.log(student); // Output: { name: 'John', age: 20, subjects: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }, grade: 'A' }
// console.log(student.name); // Output: John
// console.log(student.age); // Output: 20
// console.log(student.grade); // Output: A
// console.log(student.subjects.math.score); // Output: 90
// console.log(student.subjects.science); // Output: undefined
// console.log(student.subjects.english.score); // Output: 88
// console.log(student.subjects.math.teacher); // Output: Mr. Smith
// console.log(student.subjects.english.teacher); // Output: Mr. Brown
// console.log(student.subjects); // Output: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }
// console.log(student.subjects.math); // Output: { score: 90, teacher: 'Mr. Smith' }
// console.log(student.subjects.english); // Output: { score: 88, teacher: 'Mr. Brown' }
// console.log(student.subjects.math.score); // Output: 90
// console.log(student.subjects.english.score); // Output: 88
// console.log(student.subjects.math.teacher); // Output: Mr. Smith
// console.log(student.subjects.english.teacher); // Output: Mr. Brown
// console.log(student.subjects); // Output: { math: { score: 90, teacher: 'Mr. Smith' }, english: { score: 88, teacher: 'Mr. Brown' } }
// console.log(student.subjects.math); // Output: { score: 90, teacher: 'Mr. Smith' }




