// cara membuat object pada javascript
// 1. object literal
let person = {
  nama: "Heri Wijaya",
  energi: 10,
  makan: function (porsi) {
    this.energi += porsi
    console.log(`Hai ${this.nama}, sudah makan`)
  }
}
console.log(person)
person.makan(2)
console.log(person)

// 2. Function declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function (porsi) {
    this.energi += porsi
    console.log(`Hai ${this.nama}, sudah makan`)
  }
  
  mahasiswa.main = function(jam){
    this.energi -= jam;
    console.log(`Ini ${this.nama}, sedang bermain`)
  }

  return mahasiswa;
}

objek1 = Mahasiswa("heri", 10)
console.log(objek1)
objek1.makan(3)
console.log(objek1)
objek1.main(5)
console.log(objek1.energi)

// 3. Constructer Function
function car(merk, color) {
  this.merk = merk;
  this.color = color;

  this.showInfo = function () {
    console.log(`Merk Mobil : ${this.merk}`)
    console.log(`Warna Mobil : ${this.color}`)
  }
}
mobil_1 = new car("INNOVA", "silver")
console.log(mobil_1.showInfo())

// 4. object create
const methodHero = {
  attack: function (target) {
    target.health -= 5;
    this.power += 5
    this.health += 5
    console.log(`${this.nama} menyerang ${target.nama}`)
  },
  recall: function(){
    this.health += 100;
    this.power += 20;
    console.log(`${this.nama} memulihkan diri`)
  }
}

function Hero(nama, health, power) {
  let hero = Object.create(methodHero);
  hero.nama = nama;
  hero.health = health;
  hero.power = power;
  return hero;
}

let Hero1 = Hero("Miya", 50,100)
let Hero2 = Hero("Layla", 40,90)