let userName = prompt('Qual o seu nome?')
let userAge = parseInt(prompt('Qual sua idade?'))
let userCNH = prompt('Você possui CNH? S/N')
let userCar = prompt('Você tem carro? S/N')

if (userAge < 18 || userCNH != 's') {
  console.log(userName + ', você não pode dirigir.')
}
if (userAge >= 18 && userCNH == 's' && userCar != 's') {
  console.log(userName + ', você pode dirigir, mas tem não carro.')
}
if (userAge >= 18 && userCNH == 's' && userCar == 's') {
  console.log(userName + ', você será o motorista!')
}
