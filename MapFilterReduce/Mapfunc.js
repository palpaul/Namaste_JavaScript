// map function is basically we used to transfrom the array of elemnts
const ar = [2, 3, 5];
//inside map function we need to pass a function so we need to create a funcation whch need to paass on map function
const double = (x) => {
  return (x = x * 2);
};
const arOp = ar.map(double);
console.log(arOp);
// or we can directly define that triple function inside  the map func as an argument
const arOpt = ar.map(function triple(x) {
  return x * 3;
});
console.log(arOpt);
//using arrow func

const arOpt2 = ar.map((x) => {
  return x * 3;
});
console.log(arOpt2);
//short way
const arOpt3 = ar.map((x) => x * 3);
console.log(arOpt3);

const binary = (x) => {
  return x.toString(2);
};
const arbinary = ar.map(binary);
console.log(arbinary);
