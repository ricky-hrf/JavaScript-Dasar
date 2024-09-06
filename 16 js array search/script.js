//metode array search and find
  //array indexOf(), mencari array dan mengembalikan nilai posisi elemen
  const buah = ["Apel", "Jeruk", "Apel", "Mangga"];
  let posisi = buah.indexOf("Apel")+1;
  document.getElementById("indexof").innerHTML = "Hasil Array Menggunakan indexOf() methods: " + posisi;

  //array lastIndexOf()
  let posisi2 = buah.lastIndexOf("Apel") + 1;
  document.getElementById("lastindexof").innerHTML = "Hasil Array Menggunakan lastIndexOf() methods: " + posisi2;

  //array includes()
  document.getElementById("include").innerHTML = "Hasil Array Menggunakan includes() methods: " + buah.includes("Nanas");

  //array find()
  const bilangan = [2,4,7,15,17,19,22,30];
  let first = bilangan.find(myFunction);
  function myFunction(value, index, array){
    return value > 18;
  }
  document.getElementById("find").innerHTML = "Hasil Array Menggunakan find() methods: " + first;

  //array findIndex()
  let first2 = bilangan.findIndex(myFunction);
  function myFunction(value, index, array){
    return value > 18;
  }
  document.getElementById("findIndex").innerHTML = "Hasil Array Menggunakan findIndex() methods: " + first2;

  //array findLast()
  const temp = [27, 28, 30, 40, 42, 35, 30];
  let high = temp.findLast(x => x > 40);
  document.getElementById("findlast").innerHTML = "Hasil Array Menggunakan findLast() methods: " + high;

  //array findLastIndex()
  let pos = temp.findLastIndex(x => x > 40);
  document.getElementById("findlastindex").innerHTML = "Hasil Array Menggunakan findLastIndex() methods: " + pos;