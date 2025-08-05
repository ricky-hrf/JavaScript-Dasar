let pesanan = new Promise(function (resolve, reject) {
  let makananSiap = true;

  if (makananSiap) {
    resolve("Makanan berhasil dikirim");
  } else {
    reject("Driver tidak menemukan alamat");
  }
})

pesanan
  .then(function (hasil) {
    console.log("Sukses", hasil);
  })
  .catch(function (error) {
    console.log("Gagal: ", error);
});
