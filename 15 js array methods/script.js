//array methods dasar
  //array length, mengembalikan size atau ukuran array
  const buah = ["pisang", "Jeruk", "Apel", "Mangga"];
  let size = buah.length;
  document.getElementById("buah").innerHTML = "hasil array methods menggunakan length : " + size;

  //array toString(), mengubah array menjadi string
  document.getElementById("toString").innerHTML = "Hasil array methods menggunakan toString() : " + buah.toString();

  //array at(), mengembalikan index elemen array
  let buahku = buah.at(2);
  document.getElementById("buahku").innerHTML = "Hasil array methods menggunakan at() : " + buahku;

  // array join(), menambah karakter pemisah elemen array
  document.getElementById("join").innerHTML = "Hasil array methods menggunakan join() : " + buah.join("-");

  //array pop(), menghapus elemen terakhir pada array
  buah.pop();
  document.getElementById("array").innerHTML = "Hasil array methods menggunakan pop() : " + buah;

  //array push(), menambah elemen pada array
  buah.push("Kiwi");
  document.getElementById("push").innerHTML = "Hasil array methods menggunakan pop() : " + buah;

  //array shift(), menghapus elemen pertama array
  buah.shift();
  document.getElementById("shift").innerHTML = "Hasil array methods menggunakan shift() : " + buah;

  //array unshift(), menambahkan elemen pada bagian awal array
  buah.unshift("Lemon");
  document.getElementById("unshift").innerHTML = "Hasil array methods menggunakan unshift() : " + buah;

  //array concat()/Concatenating, membuat array baru dari gabungan array
      //contoh 1
      const arr1 = ["Cecilion", "Lone"];
      const arr2 = ["Emil", "Tobias", "Linus"];
      const arr3 = ["Robin", "Morgan"];
      const myChildren = arr1.concat(arr2, arr3);
      document.getElementById("concat").innerHTML = "Hasil array methods contoh 1 menggunakan concat() : " + myChildren;
      //contoh 2, menggabungkan nilai string ke dalam array
      const MyChildren = arr1.concat("Peter");
      document.getElementById("concat2").innerHTML = "Hasil array methods contoh 2 menggunakan concat() : " + MyChildren;

  //array copyWithin(), menduplikat elemen array ke posisi yang lain di dalam array
  document.getElementById("copy").innerHTML = "Hasil array methods menggunakan copyWithin() : " + buah.copyWithin(2,0);

  //array flat(), membuat array baru dengan elemen sub-array
  const myArr = [[1,2], [3,4], [5,6]];
  const newArr = myArr.flat();
  document.getElementById("flat").innerHTML = "Hasil array methods menggunakan flat() : " + newArr;

  //array flatMap()
  const bilangan = [1,2,3,4,5,6];
  const newBilangan = bilangan.flatMap(x => [x, x * 10]);
  document.getElementById("flatmap").innerHTML = "Hasil array methods menggunakan flatMap() : " + newBilangan;

  //array splice(), bisa digunakan untuk menambah item baru di dalam array
  buah.splice(2,0, "Lemon", "Kiwi");
  document.getElementById("splice").innerHTML = "Hasil array methods menggunakan splice() : " + buah;

  //array tospliced()
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei"];
  const spliced = [bulan.toSpliced(0, 1)];
  document.getElementById("tospliced").innerHTML = "Hasil array methods menggunakan tospliced() : " + spliced;

  //array slice()
  const newBulan = bulan.slice(1,3);
  document.getElementById("slice").innerHTML = "Hasil array methods menggunakan slice() : " + newBulan;

//trim(), menghapus spasi di awal dan akhir string
  const str = "   Hello World!   ";
  const trimmedStr = str.trim();
document.getElementById("trim").innerHTML = "Hasil trim() : '" + trimmedStr + "'";
  
// filter(), membuat array baru dengan elemen yang memenuhi kondisi tertentu
  const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angkaGenap = angka.filter(num => num % 2 === 0);
document.getElementById("filter").innerHTML = "Hasil filter() : " + angkaGenap;

// map(), membuat array baru dengan hasil dari fungsi yang diterapkan pada setiap elemen
const angkaKuadrat = angka.map(num => num * num);
document.getElementById("map").innerHTML = "Hasil map() : " + angkaKuadrat;