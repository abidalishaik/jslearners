function name() {
  const obj = {
    address: {
      // city: "Wonderland",
      zip: "12345",
    },
    name: "Alice",
    age: 30,
    // greet: function () {
    //   return `Hello, my name is Alice`;
    // },
    // getDetails: function () {
    //   return `this is a test`;
    // },
  };
}

const n = new name();

name.prototype.greeting = function () {
  return `Hello, my name is ${this.name}`;
};

n.__proto__.greet = function () {
  return `this is a test`;
};

n.__proto__.abc = "abc";

console.log(n.greeting()); // Hello, my name is undefined

console.log(n.greet()); // Hello, my name is Alice
console.log(n.abc);
// console.log(n.getDetails()); // this is a test
// console.log(n.greet()); // Hello, my name is Alice

const aa = new name();

console.log(aa.abc);
console.log(aa.greeting()); // Hello, my name is undefined

const onj = {
  name: "John",
};

onj.age = 12;
