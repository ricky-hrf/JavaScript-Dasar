let data = [1, 4, 7, 9, 3, 5, 2, 8, 6]
// menampilkan data di atas 5 dengan perulangan
let newData = []
for (let i = 0; i < data.length; i++){
  if (data[i] > 5) {
    newData.push(data[i])
  }
}
console.log(newData)

// menggunakan filter
const newDataOfFilter = data.filter(function (item) {
  return item > 5;
});
console.log(newDataOfFilter)

// map untuk mengalikan semua data
const dataKali = data.map(function (item) {
  return item * 2;
});
console.log(data)
console.log(dataKali)

// fungsi reduce untuk menjumlahkan data
const totalData = data.reduce((accumulator, currentValue) => accumulator + currentValue, 9);
console.log(totalData)

// method chaining
const hasilAkhir = data.filter(a => a > 5)
  .map(a => a * 4)
  .reduce((acc, cur) => acc + cur);
console.log(hasilAkhir);