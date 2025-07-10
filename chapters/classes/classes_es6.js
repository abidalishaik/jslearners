class Person {
  #name = "";
  // age = 0;
  address = {
    city: "",
    zip: "",
  };

  constructor(name, age) {
    this.#name = name;
    this.age = age;
    const res = this.#greet();
    // console.log(res);
    // console.log(this.#name); // abid
  }

  get name() {
    return this.#name;
  }

  get greet() {
    return this.#greet();
  }
  
  set name(value) {
    this.#name = value;
  }

  #greet() {
    return `Hello, my name is ${this.#name}`;
  }
}

const person = new Person("abid", 25);
// console.log(person.#name); // abid
console.log(person.age); // 25
person.name = "abid";
console.log(person.name); // abid

console.log(person.greet); // Hello, my name is abid
// person.name = "abid";
// person.age = 25;
// console.log(person);
// console.log(person.greet()); // Hello, my name is abid
