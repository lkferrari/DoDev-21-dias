let n1 = Number(prompt('Digite o primeiro núermo: '))
let n2 = Number(prompt('Digite o segundo núermo: '))
let operation = parseInt(
  prompt(' 1 - soma \n 2 - subtração \n 3 - multiplicação \n 4 - divisão')
)

switch (operation) {
  case 1:
    console.log('Você esolheu soma')
    console.log('O resultado é: ' + (n1 + n2))
    break

  case 2:
    console.log('Você esolheu subtração')
    console.log('O resultado é: ' + (n1 - n2))
    break

  case 3:
    console.log('Você esolheu mutiplicação')
    console.log('O resultado é: ' + n1 * n2)
    break

  case 4:
    console.log('Você esolheu divisão')
    console.log('O resultado é: ' + n1 / n2)
    break

  default:
    console.log('Operação inválida!')
    break
}
