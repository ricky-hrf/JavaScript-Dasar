// pemrograman javascript menghasilkan dua fase
// 1. fase creasi yaitu hoisting variable dan function (menaikkan ke atas) variable di isi undefined dan function diisi function itu sendiri
// fase eksekusi

// contoh 1
// console.log(mobil)
// var mobil = "Toyota"

// contoh 2:
// var merkMobil = "Calya"
// var warna = "Silver"
// console.log(info())

// function info() {
//   return `Merk Mobil: ${merkMobil} dan Warna: ${warna}`
// }

// contoh 3:

var nama = "Jaya";
var username = "jaya123"

function data(username) {
  var alamat = "Medan";
  return alamat + username;
}
console.log(data(username))