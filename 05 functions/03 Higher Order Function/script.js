function pekerjaan(nama, makan) {
  console.log(`${nama} sedang ada pekerjaan`)
  makan()
}
function makan() {
  console.log("sedang makan nasi")
}
pekerjaan("Lesta", makan)

// contoh2

function inputName(callback) {
  let name = prompt("Masukkan nama: ")
  alert(callback(name));
}
function greet(name) {
  return `Halo, ${name}! Selamat datang!`
}
inputName(greet);

// contoh 3
function multiplier(x) {
  return function(y) {
    return x * y;
  }
}

const kali = multiplier(2);
console.log(kali(8));

// menggunakan higher order function pada array
// map()
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled);

// filter()
const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});
console.log(evenNumbers);

// reduce()
const sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);
console.log(sum);