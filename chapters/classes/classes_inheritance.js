class Parent {
  money = 300;
  constructor(money) {
    this.money = money;
    console.log("Parent class constructor called");
  }

  greet(relatation) {
    return `Hello, I am the ${relatation}. I have ${this.money} in my account.`;
  }
}

class Child extends Parent {
  constructor() {
    super(500); // Call the parent's constructor
    console.log("Child class constructor called");
    // You can access parent's properties and methods here
    console.log(this.money); // 300000000
    console.log(super.greet("parent")); // Hello, I am the parent. I have 300000000 in my account.
    console.log(this.greet("child")); // Hello, I am the child. I have 100000000 in my account.
    // console.log(super.callparentGreet()); // Hello, I am the parent. I have 300000000 in my account.
  }

  // Overriding the parent's property
  money = 100; // This will override the parent's money property

  // Overriding the parent's property
  greet(relatation) {
    console.log("this is child class greet method");
    // Call the parent's greet method
    // const parentGreeting = super.greet("parent");
    // return `${parentGreeting} And I am the ${relatation}.`;
    return `Hello, I am the ${relatation}. I have ${this.money} in my account.`;
  }

  callparentGreet() {
    // Call the parent's greet method
    return super.greet("parent");
  }
}

const child = new Child(); // Parent's money: 100000000
// console.log(child.greet("child"));
// console.log(child.money); // 100000000
// console.log(child.callparentGreet()); // Hello, I am the parent. I have 300000000 in my account.
