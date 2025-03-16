let userHunger = prompt('Você está com fome? S/N')
let userMoney = prompt('Você tem dinheiro? S/N')
let userRestaurant = prompt('Seu restaurante favorito está aberto? S/N')

if (userHunger == 'n' || userMoney == 'n') {
  console.log('Hoje irá jantar em casa')
}
if (userHunger == 's' && userMoney == 's' && userRestaurant == 'n') {
  console.log('Peça um delivery')
}
if (userHunger == 's' && userMoney == 's' && userRestaurant == 's') {
  console.log('Vá jantar em seu restaurante favorito!')
}
