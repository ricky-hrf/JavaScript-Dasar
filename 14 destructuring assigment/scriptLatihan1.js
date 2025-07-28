function tambahKali(bilangan1, bilangan2) {
  return [bilangan1 + bilangan2, bilangan1*bilangan2]
}
console.log(tambahKali(3, 4))
const [tambah, kali] = tambahKali(3, 4)
console.log(tambah)
console.log(kali)

function kalkulator(angka1, angka2) {
  return [angka1+angka2, angka1-angka2,angka1*angka2,angka1/angka2]
}

const [pertambahan, kurang, perkalian, bagi = "not found"] = kalkulator(10, 2)
console.log(pertambahan)
console.log(kurang)
console.log(perkalian)
console.log(bagi)

// dengan objek
function tanya(nama, waktu) {
  return {
    pagi: `halo ${nama} selamat pagi. sekarang jam ${waktu}`,
    siang: `halo ${nama} selamat siang. sekarang jam ${waktu}`,
    sore: `halo ${nama} selamat sore. sekarang jam ${waktu}`,
    malam: `halo ${nama} selamat malam. sekarang jam ${waktu}`,
  }
}
const { pagi, siang, sore, malam } = tanya("hemm", 12)
console.log(pagi);
console.log(siang);
console.log(sore);
console.log(malam);