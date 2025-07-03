const symbol = Symbol("dummy");

console.log(symbol); // Symbol(dummy)
console.log(typeof symbol); // symbol
console.log(symbol.description); // dummy
console.log(symbol.toString()); // Symbol(dummy)

const key = 123;
const obj = {
  key: `nyc`,
  [key]: `value`,
};
console.log(obj); // { key: 'nyc', '123': 'value' }
