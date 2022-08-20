let prom = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 2) {
    resolve("success ok");
  } else {
    reject("Failed sit");
  }
});
prom
  .then((message) => {
    console.log("Inside then--->: " + message);
  })
  .catch((message) => {
    console.log("Inside catch---> : " + message);
  });
