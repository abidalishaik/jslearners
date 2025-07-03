const obj = {
  address: {
    // city: "Wonderland",
    zip: "12345",
  },
  name: "Alice",
  age: 30,
  greet: function () {
    return `Hello, my name is Alice`;
  },
  getDetails: function () {
    return `this is a test`;
  },
  email: "alice@example.com",
  isActive: true,
  hobbies: ["reading", "chess", "hiking"],
  scores: {
    math: 95,
    english: 88,
  },
};

const {
  greet,
  getDetails,
  name,
  age: objAge = 30,
  address: { city: objCity = "usa", zip },
  ...rest
} = obj;



console.log(rest)
// const { city, zip } = address;

// console.log(obj["name"]); // Alice
// console.log(obj.age); // 30
// console.log(obj.greet()); // Hello, my name is Alice
// console.log(obj.getDetails()); // Alice is 30 years old and lives in Wonderland

// console.log(name); // Alice
// console.log(objAge); // 30
// console.log(greet()); // Hello, my name is Alice
// console.log(getDetails()); // this is a test
// console.log(city); // Wonderland
// console.log(zip); // 12345

// console.log(obj)

const array = ["name", 30, "Wonderland", "USA", "Alice", "Bob", "Charlie"];

const [jfhbsdckjn = 30, cityArray = "Wonderland", ...nameArray] = array;

console.log(nameArray); // name
console.log(jfhbsdckjn); // 30
console.log(cityArray); // Wonderland
