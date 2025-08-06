let tepat = true
let janji = new Promise((resolve, reject) => {
  if (tepat) {
    setTimeout(function () {
      resolve("janji ditepati");
    }, 2000)
  } else {
    setTimeout(function () {
      reject("janji tidak ditepati");
    }, 2000)
  }
});

console.log("mulai")
janji
  .then(response => console.log(response))
  .catch(response => console.log(response));
console.log("selesai")