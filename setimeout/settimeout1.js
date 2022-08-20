const hello = () => {
  for (let a = 1; a <= 5; a++) {
    setTimeout(function () {
      console.log(a);
    }, a * 1000);
  }
};
hello();
