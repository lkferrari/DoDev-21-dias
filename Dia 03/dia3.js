let nameUser = prompt('Qual o seu nome?')
let ageUser = parseInt(prompt('Qual a sua idade?'))
let heightUser = parseFloat(prompt('Qual a sua altura? Em metros'))
let weightUser = parseFloat(prompt('Qual o seu peso? Em kilos'))

let bornUser = 2025 - ageUser

let imc = weightUser / (heightUser * heightUser)

console.log(
  'Olá ' +
    nameUser +
    ', você tem ' +
    ageUser +
    ' anos, nasceu em ' +
    bornUser +
    ', tem ' +
    heightUser +
    'm de altura, pesa ' +
    weightUser +
    'kg seu IMC é ' +
    imc.toFixed(2) +
    'Kg/m2'
)
