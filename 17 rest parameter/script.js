// rest parameter
function country(negaraPertama, ...sisanya) {
  return `Negara Pertama: ${negaraPertama}, sisanya: ${sisanya}`
}
console.log(country("Indonesia", "Malaysia", "Singapore"))

function jumlah(...bilangan) {
  let total = 0;
  for (const e of bilangan) {
    total += e;
  }
  return total;
}

console.log(jumlah(9, 2, 3, 4, 5))

// object destructuring
const team = {
  'pm': 'Tri',
  'fe': 'alex',
  'be': 'efdi',
  'ux': 'rido',
  'ux': 'keyl',
  'devOps': 'gurmel'
}

const { pm, ...myTeam } = team;
console.log(pm)
console.log(myTeam)