//new date()
const d = new Date();
document.getElementById("demo").innerHTML = "Hasil JavaScript menggunakan Date() : " + d;

//new Date(string), membuat objek dari date berbentuk string
const dt = new Date("2017-12-25");
document.getElementById("demo1").innerHTML = dt;

const dat = new Date(2018, 11, 24, 10, 33, 30, 0);
document.getElementById("demo2").innerHTML = dat;