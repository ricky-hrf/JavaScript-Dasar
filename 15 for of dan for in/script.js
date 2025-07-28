const buah = ["Jeruk", "Apel", "Mangga", "Pisang", "Semangka"];

for (const item of buah) {
  console.log(item);
}

for (const index in buah) {
  console.log(index);
}

let warna = ["Merah", "Hijau", "Biru"];
for (const [index, item] of warna.entries()) {
  console.log(`Warna ke-${index + 1} adalah ${item}`);
}

const ratings = [
  { name: "Inception", rating: 8.8 },
  { name: "The Dark Knight", rating: 9.0 },
  { name: "Interstellar", rating: 8.6 },
  { name: "Fight Club", rating: 8.8 },
  { name: "Pulp Fiction", rating: 8.9 },
]
let sum = 0;
for (const { name, rating } of ratings) {
  console.log(`Film: ${name}, Rating: ${rating}`);
  sum += rating;
  console.log(`Total Rating: ${sum}`);
}

// Menggunakan for...of untuk mengiterasi string
const str = "Hello, World!";
for (const char of str) {
  console.log(char);
}