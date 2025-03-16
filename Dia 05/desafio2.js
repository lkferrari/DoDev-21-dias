let userChoice = parseInt(
  prompt(
    'Olá, qual opção deseja? \n 1 - Abastercer gasolina \n 2 - Abastecer etanol \n 3 - Caliberar os pneus'
  )
)

let litros = 0

switch (userChoice) {
  case 1:
    litros = prompt('Quanto reais deseja abastecer de gasolina?')
    litros = litros / 5
    console.log(litros + ' litros abastecido com gasolina')
    break

  case 2:
    litros = prompt('Quanto reais deseja abastecer de etanol?')
    litros = litros / 3
    console.log(litros + ' litros abastecido com etanol')
    break

  case 3:
    console.log('Penus calibrados com sucesso!')
    break

  default:
    console.log('Não temos essa opção :/')
}
