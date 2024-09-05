// Studi Kasus 1: Konversi String ke Number
function convertAndSum(str1, str2) {
  let num1 = Number(str1);
  let num2 = Number(str2);

  if (isNaN(num1) || isNaN(num2)) {
      return "Salah satu atau kedua input bukan angka yang valid.";
  } else {
      return num1 + num2;
  }
}

// Studi Kasus 2: Pembulatan Angka
function roundNumbers(number) {
  let roundedToTwoDecimals = number.toFixed(2);  // Pembulatan 2 desimal
  let roundedToNearest = Math.round(number);     // Pembulatan bilangan bulat terdekat
  return { roundedToTwoDecimals, roundedToNearest };
}

// Studi Kasus 3: Perbandingan Bilangan
function compareNumbers(num1, num2) {
  if (num1 > num2) {
      return `${num1} lebih besar dari ${num2}`;
  } else if (num2 > num1) {
      return `${num2} lebih besar dari ${num1}`;
  } else {
      return "Kedua angka sama.";
  }
}

// Studi Kasus 4: Mengecek Ganjil atau Genap
function checkOddOrEven(num) {
  return num % 2 === 0 ? "Genap" : "Ganjil";
}

// Studi Kasus 5: Mencari Angka Faktorial
function factorial(n) {
  if (n === 0) {
      return 1;
  } else {
      return n * factorial(n - 1);
  }
}

// Menggunakan fungsi dan menampilkan hasil ke dalam elemen HTML
document.getElementById('output').innerHTML = `
  <h2>Hasil Studi Kasus</h2>
  <p><strong>Studi Kasus 1:</strong> ${convertAndSum('123.45', '67')}</p>
  <p><strong>Studi Kasus 2:</strong> 89.789 dibulatkan menjadi ${roundNumbers(89.789).roundedToTwoDecimals} (2 desimal), 
  dan dibulatkan ke bilangan bulat menjadi ${roundNumbers(89.789).roundedToNearest}</p>
  <p><strong>Studi Kasus 3:</strong> ${compareNumbers(8, 5)}</p>
  <p><strong>Studi Kasus 4:</strong> 10 adalah ${checkOddOrEven(10)}</p>
  <p><strong>Studi Kasus 5:</strong> Faktorial dari 5 adalah ${factorial(5)}</p>
`;
