/*
The setTimeout() is a method inside the window object, it calls the specified function or evaluates a JavaScript expression provided as a string after a given time period for only once. The following output shows the existence of setTimeout() method inside the window object.
*/
function abc() {
  var i = 1;
  setTimeout(function () {
    console.log(i);
  }, 3000);
  console.log("Namaste Javascript");
}
abc();

//use var got diff result
const hello1 = () => {
  for (var a = 1; a <= 5; a++) {
    setTimeout(function () {
      console.log(a);
    }, a * 1000);
  }
};
hello1();
// settime out func syntax
//Syntax:
//setTimeout(function, time);
//setTimeout(function, milliseconds, param1, param2, ...)
//Parameters:
/*
function: It is the reference to a function that is going to run after a given time.
time: The milliseconds after which the given function will execute.
*/
