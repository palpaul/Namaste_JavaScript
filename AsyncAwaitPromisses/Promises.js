//creation of promises
//defining the promises
const promise = new Promise((vlaue, rej) => {
  let a = 11;
  resolve(10);
});
//transform
promise.then((value) => value * 2);

console.log(value);
//subscribe
promise.then((value) => {
  console.log(value);
});
