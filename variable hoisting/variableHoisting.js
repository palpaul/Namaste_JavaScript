//variable, function  hoisting is a mechnasim initilazing the vlaue before declaring it.
//benifit of it
/* In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

*/
function justAFunc() {
  if (let) {
  }
  issaVar = "I'm a variable"; // initilizing the value
  var issaVar; // declaring the variable later ok
  console.log(issaVar);
}
justAFunc();
