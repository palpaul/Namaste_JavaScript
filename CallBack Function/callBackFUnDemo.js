//a function calling another function know ias call back funcation
//call back menas simply i will call you later

//example
/*created func x() now calling func x at line 13 and passing one callback func y() inside y agian calling another call back function z okk */

function x(y) {
  console.log("im x");
  y(function z() {
    console.log("im z");
  });
}
x(function y(z) {
  console.log("im y");
  z();
});
