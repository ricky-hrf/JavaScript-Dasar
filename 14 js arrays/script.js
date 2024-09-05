//membuat array 
const mobil = ['ertiga', 'avanza', 'calya'];
document.getElementById("demo").innerHTML = mobil;
const mobilku = new Array ('HRV', 'stargazer', 'innova');
document.getElementById("output").innerHTML = "Saya akan Memiliki Mobil ini : " + mobilku;

//mengakses elemen
let mbl = mobilku[0];
document.getElementById("mbl").innerHTML = "Index pertama dari array tersebut adalah: " + mbl;

//mengubah nilai array
mobilku[2] = 'BMW';
document.getElementById("change").innerHTML = "Element array index ke-2 diubah menjadi : " + mobilku;

//konversi array ke string
const buah = ["apel", "pear", "pepaya"];
document.getElementById("buahkita").innerHTML = "array buah = " + buah.toString();

// properti dan method array
    //length untuk menghitung jumlah elemen dalam array
    let size = buah.length;
    document.getElementById("jumlahelemen").textContent = "jumlah elemen dari array buah adalah : " + size;

//looping element array
    //contoh pertama
    const mahasiswa = ["Budi", "Ayu", "Lesta", "Jerry"];
    let mhslen = mahasiswa.length;
    let text = "<ul>";
        for (let i = 0; i < mhslen; i++){
            text += "<li>" + mahasiswa[i] + "</li>";
        }
        text += "</ul>";
    document.getElementById("looping").innerHTML = "Hasil dari penggunaan looping :" + "<br>" + text;
    //contoh kedua menggunakan function Array.forEach()
    let text2 = "<ul>";
        mahasiswa.forEach(myFunction);
    text2 += "</ul>";
    function myFunction(value){
        text2 += "<li>" + value + "</li>";
    };
    document.getElementById("looping2").innerHTML = "hasil looping menggunakan forEach : "+"<br>"+text2;

//menambahkan elemen array
    //menggunakan push() method
    function tambahArray(){
        mahasiswa.push("Brian");
        document.getElementById("tambah").innerHTML = "array mahasiswa setelah di tambah :" + mahasiswa;
    };
    //menggunakan length
    function tbarlength(){
        mahasiswa[mahasiswa.length] = "George";
        document.getElementById("tambah2").innerHTML = "Tambah elemen array menggunakan length :" + mahasiswa;
    };
