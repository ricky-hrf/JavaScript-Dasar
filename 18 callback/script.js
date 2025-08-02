// contoh 1: synchronus
// function sapa(nama, panggil) {
//   console.log("Hai", nama);
//   panggil()
// }

// function lanjutan() {
//   console.log("Apa kabar?");
// }

// sapa("ayu", lanjutan);

// contoh 2: asynchronous
// function buatKopi(panggilNanti) {
//   console.log("sedang buat kopi ...")
  
//   setTimeout(function () {
//     console.log("kopi selesai ...")
//     panggilNanti()
//   }, 3000);
// }

// function kopiSiap() {
//   console.log("minum kopi");
// }

// buatKopi(kopiSiap);

// contoh 3: mengambil data json dengan ajax
function getData(url, success, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        success(xhr.response);
      } else if (xhr.status === 404) {
        error();
      }
    }
  }

  xhr.open('get', url);
  xhr.send();
}

getData('data.json', isiData => {
  const data = JSON.parse(isiData);
  data.forEach(m => console.log(m.name));
}, () => {

});