// Dengan cara function expresion
let car = function (merk) {
  return `Mobil saya merek ${merk}`
}
console.log(car("HRV"))

// dengan cara arrow function
let car2 = (merk) => {
  return `Mobil kedua saya merek ${merk}`
}
console.log(car2("Innova"))

// jika menerima 2 parameter
let car3 = (merk, warna) => {
  return `Mobil ketiga saya bermerek ${merk} berwarna ${warna}`
}
console.log(car3("TOYOTA RUSH", "Hitam"))

// implisit return
let car4 = merk => `Mobil keempat saya ${merk}`;
console.log(car4("civic"))

let cars = ["HRV", "INNOVA", "RUSH", "CIVIC"]

// menghitung jumlah karakter tiap data
// dengan function expression
let jumlahKarakter = cars.map(function (item) {
  return item.length;
});
console.log(jumlahKarakter);

// dengan arrow function
let JumlahKarakter = cars.map(item => item.length);
console.log(JumlahKarakter);

let jumlah = cars.map(item => ({ item: item, jumlah: item.length }));
console.table(jumlah)