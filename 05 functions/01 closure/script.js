// function init() {
//   let nama = "heri";
//   function tampilNama() {
//     console.log(nama);
//   }
//   tampilNama();
// }
// init()

// contoh 2

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  }
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());