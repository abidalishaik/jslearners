function func(a, b, c, d, e, ...rest) {
  console.log(rest);
  return a + b;
}

func(
  1,
  2,
  3,
  4,
  5,
  { 6: "six" },
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30
);
