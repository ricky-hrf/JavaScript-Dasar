let counterBtn = document.getElementById('counterBtn');
let resetBtn = document.getElementById('resetBtn');
let counterDisplay = document.getElementById('counterDisplay');

let count = 0;
counterBtn.addEventListener('click', () => {
  count++;
  counterDisplay.textContent = `Counter: ${count}`;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  counterDisplay.textContent = `Counter: ${count}`;
});