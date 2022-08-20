const arr = [1, 5, 6, 3, 2];
function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log("sum of the ele of array = " + findSum(arr));
//same thing we can use by using reduce function

const out = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
console.log(out);

// find max for htis given arr
function findMax(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(findMax(arr));
