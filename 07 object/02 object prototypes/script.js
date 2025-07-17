function Mobil(merk, warna, bensin) {
  this.merk = merk;
  this.warna = warna;
  this.bensin = bensin;
}

Mobil.prototype.jalan = function (km) {
  this.bensin -= (0.5 * km)
  console.log(`Mobil berjalan sejauh ${km} km`)
}

obj1 = new Mobil("hrv", "putih", 100)

// versi class
class Elektronik{
  constructor(jenis, harga, stok) {
    this.jenis = jenis;
    this.harga = harga;
    this.stok = stok;
  }

  pembelian(jumlah) {
    this.stok -= jumlah;
    console.log( `Telah dilakukan pembelian sebanyak ${jumlah}`)
  }
}

let e1 = new Elektronik("Laptop", 6700000, 30)