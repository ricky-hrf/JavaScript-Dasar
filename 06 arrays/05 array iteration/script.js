// array forEach()
const bilangan = [67, 83,14, 25, 32];
let txt = "";
bilangan.forEach(myFunctions);
document.getElementById("demo").innerHTML = "array mengguanakn forEach() : " + "<br>" + txt;
function myFunctions(value, index,array){
  txt += value + "<br>";
}

// array map()
const bilangan2 = bilangan.map(test);
document.getElementById("demo1").innerHTML = "array menggunakan map() : " + bilangan2;
function test(value, index, array){
  return value * 2;
}

// array flatMap()
const newBilangan = bilangan.flatMap((x) => x * 2);
document.getElementById("demo2").innerHTML = "array menggunakan flatMap() : " + newBilangan;

// array filter()
const over30 = bilangan.filter(test2);
function test2(value, index, array){
  return value > 30;
}
document.getElementById("demo3").innerHTML = "array menggunakan filter() : " + over30;

// array reduce()
let sum = bilangan.reduce(test3);
function test3(total, value, index, array){
  return total + value;
}
document.getElementById("demo4").innerHTML = "array menggunakan reduce() : " + sum;

// array reduceRight()
let sum2 = bilangan.reduceRight(test4);
function test4(total, value, index, array){
  return total + value;
}
document.getElementById("demo5").innerHTML = "array menggunakan reduceRight() : " + sum2;

// array every()
let allOver30 = bilangan.every(test5);
function test5(value, index, array){
  return value > 30;
}
document.getElementById("demo6").innerHTML = "array menggunakan every() : " + allOver30;

// array some()
let someOver30 = bilangan.some(Function);
function Function(value, index, array){
  return value > 30;
}
document.getElementById("demo7").innerHTML = "array menggunakan some() : " + someOver30;

// array keys()
const buah = ["banana", "Orange", "Apple", "Manggo"];
const keys = buah.keys();
let text = "";
for (let x of keys){
  text += x + "<br>";
}
document.getElementById("demo8").innerHTML = "Hasil array menggunakan keys() : " + "<br>" + text;