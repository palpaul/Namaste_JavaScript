const hello = () => {
  for (var a = 1; a <= 5; a++) {
    function close(a) {
      setTimeout(function () {
        console.log(a);
      }, a * 1000);
    }
    close(a);
  }
};
hello();
