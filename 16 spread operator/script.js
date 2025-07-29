let country = ["Indonesia", "Malaysia", "Singapore", "Filipina", "Thailand"]
console.log(...country)
// menggabungkan 2 array
let newCountry = ["Vietnam", "Kamboja", "Laos"]
let finalCountry = [...country, "Myanmar", "Timor Leste", ...newCountry]
console.log(finalCountry)

// mengcopy array
let copyFinalCountry = [...finalCountry]
copyFinalCountry[5] = "Miyanmar";
console.log(copyFinalCountry)

let hover = document.querySelector(".hover")
let bagi = [...hover.textContent].map(c => `<span>${c}</span>`).join("");
hover.innerHTML = bagi;