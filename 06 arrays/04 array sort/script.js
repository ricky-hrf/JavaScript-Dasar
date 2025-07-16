//sortir alfabeth
  //array sort()
  const buah = ["Pisang", "Jeruk", "Apel", "Mangga"];
  buah.sort();
  document.getElementById("sort").innerHTML = "Hasil array menggunakan sort() : " + buah;

  //array reverse()
  buah.reverse();
  document.getElementById("reverse").innerHTML = "Hasil array menggunakan reverse() : " + buah;

  //array toSorted()
  const bulan = ["jan", "feb", "mar", "apr"];
  const sorted = bulan.toSorted();
  document.getElementById("tosorted").innerHTML = "Hasil array menggunakan toSorted() : " + sorted;

  //array toReversed()
  const reversed = bulan.toReversed();
  document.getElementById("tr").innerHTML = "Hasil array menggunakan toReversed() : " + reversed;

//sortir numerik
  //numeric sort
  const points = [40, 100, 1, 5, 25, 10];
  points.sort(function(a, b){return a - b});
  document.getElementById("numsort").innerHTML = "Hasil array menggunakan sort() pada numerik : " + points;
  //random sort
  points.sort(function(){return 0.5, - Math.random()});
  document.getElementById("numsort2").innerHTML = "Hasil array dengan random sort : " + points;

  //Math.min()
  const bilangan = [40, 100, 1, 5, 25, 10];
  document.getElementById("demo").innerHTML = myArrayMin(bilangan);
  function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}
  //Math.max()
  document.getElementById("demo2").innerHTML = myArrayMax(bilangan);
  function myArrayMax(arr) {
  return Math.max.apply(null, arr);
  }