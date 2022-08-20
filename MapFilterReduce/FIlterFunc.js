const arr = [3, 1, 5, 4, 6, 9, 10];

const isEven = (x) => {
  return x % 2 === 0;
};

const odd = arr.filter(function isOdd(x) {
  return x % 2 == 1;
});
console.log(odd);

const out = arr.filter(isEven);
console.log(out);

const output = arr.filter((x) => {
  return x % 2 === 0;
});
console.log(output);

const g4 = arr.filter((x) => x > 4);
console.log(g4);
