//fungsi memeriksa apakah string merupakan polidrome
function checkPolidrome(){
  //ambil nilai inputan
  let str = document.getElementById("inputString").value;

  //bersihkan string dari karakter non-alfanumerik dan ubah menjadi huruf kecil
  let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  //membalik string yang sudah dibersihkan
  let reversedStr = cleanStr.split('').reverse().join('');

  //bandingkan string asli dengan yang sudah dibersihkan dengan versi terbalik
  if (cleanStr === reversedStr && cleanStr.length > 0){
    document.getElementById("result").textContent = '"${str}" adalah polidrome';
  }else{
    document.getElementById("result").textContent = '"${str}" bukan polidrome';
  }

}