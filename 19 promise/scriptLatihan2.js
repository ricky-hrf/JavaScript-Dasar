// callback(resolve, reject, finally)
let tepat = false;
let janji = new Promise((resolve, reject) => {
  if (tepat) {
    resolve("Ditepati");
  } else {
    reject("Tidak ditepati")
  }
});

janji
  .then(function (respon) {
  console.log("yes " + respon)
  })
  .catch(function (respon) {
  console.log("no " + respon)
})