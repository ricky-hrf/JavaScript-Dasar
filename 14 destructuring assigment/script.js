// cara biasa 
const negara = ["Indonesia", "Malaysia", "Singapore", "Thailand", "Filipina"]
console.log(negara[1])
const [negara1, negara2, negara3, negara4, negara5] = ["Indonesia", "Malaysia", "Singapore", "Thailand", "Filipina"]
console.log(negara1)
// melewati item tertentu
const [country1, , country3, , country5] = ["Indonesia", "Malaysia", "Singapore", "Thailand", "Filipina"]
console.log(country3)
// rest parameter
const [country, ...values] = ["Indonesia", "Malaysia", "Singapore", "Thailand", "Filipina"]
console.log(values)

// destructuring object
let mobil = {
  merk : "HRV",
  warna: "Putih",
  tahun : "2018"
}

let { merk, warna, tahun } = mobil;
console.log(merk)

// assigment tanpa deklarasi
( { Nama, umur, pekerjaan } = { Nama: "Hartono", umur: 37, pekerjaan: "pengusaha" } );
console.log(umur)
