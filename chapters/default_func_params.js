function func(
  a = 10,
  b = 20,
  c = "this is a default parameter c value",
  d = defaultFunc(),
  e = [1, 2, 3, 4, 5],
  f = { key: "value" }
) {
  console.log(a, b, c, d, e, f);
  // Default parameters
  //   if (a == undefined) a = 10;
  //   if (b == undefined) b = 20;
  //   if (c == undefined) c = 30;
  return a + b;
}

function defaultFunc() {
  return 10000;
}

const res = func(undefined, 50, undefined);
console.log("Result:", res);
