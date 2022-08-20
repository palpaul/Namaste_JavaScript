setTimeout(function () {
  console.log("timer");
}, 2000);
//once timer will expire then it will execute the code inside settimeout function ie. after 2 sec
// so first x,y then after 2 sec timer will print
function x(y) {
  console.log("X");
  y();
}
x(function y() {
  console.log("Y");
});
