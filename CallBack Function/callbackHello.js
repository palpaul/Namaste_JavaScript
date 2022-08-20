function hello(tello) {
  console.log("im Hello");
  tello();
}
hello(function tello() {
  console.log("im tello");
});
