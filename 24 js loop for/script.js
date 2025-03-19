const mobil = ["BWM", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
let text = "";
for (let i = 0; i < mobil.length; i++) {
  text += mobil[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

let bilangan = "";
for (let i = 0; i < 5; i++){
  bilangan += "Nilai bilangan adalah " + i + "<br>";
}
document.getElementById("demo1").innerHTML = bilangan;