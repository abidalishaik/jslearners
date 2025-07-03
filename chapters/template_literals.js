const name = "ayaan";
const age = 25;

console.log("the name is " + name + " and is " + age);
console.log(`the name is ${name} and is ${age}`);

// Template literals allow for multi-line strings and string interpolation
const multiLineString = `This is a string
that spans multiple ${name} and is ${age}
lines.`;
console.log(multiLineString);

// You can also use expressions inside template literals
const expression = `The sum of 2 and 3 is ${2 + 3}`;
console.log(expression);
