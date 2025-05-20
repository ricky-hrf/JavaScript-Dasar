let perulangan = true;
while (perulangan) {
  perulangan = confirm("lanjutkan perulangan?");
}
let angkaAwal = 1;
while (angkaAwal <= 5) {
  console.log(angkaAwal);
  angkaAwal++;
}
console.log('======latihan 1======');
let i = 1;
let jumlah = 0;
while (i <= 10) {
  let hasil = jumlah + i;
  console.log(jumlah + '+' + i + '=' + hasil) //(`${jumlah} + ${i} = ${hasil}`)
  jumlah = hasil;
  i++;
}
console.log('======latihan 2======');
console.log('======Menghitung jumlah karakter pada kata "SUMATERA"======');
let kata = "SUMATERA";
let x = 0;
let jumlahKarakter =0;
while (x < kata.length) {
  jumlahKarakter++;
  x++;
}
console.log(`jumlah karakter di dalam kata "${kata}" adalah: ${jumlahKarakter}`);
console.log('======latihan 3======');
console.log('======Membuat tabel perkalian dengan while======');
let angka = 1;
while (angka <= 5) {
  let kali = 1;
  console.log(`Tabel Perkalian ${angka}:`);
  while (kali <= 10) {
    console.log(`${angka} + ${kali} = ${angka * kali}`);
    kali++;
  }
  angka++;
}
