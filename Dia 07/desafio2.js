let saldo = parseFloat(1000)
let nome = prompt("Qual o seu nome?")
let cpf = prompt("Qual o seu CPF?")
let valor = 0
let operacao = ""
let continuar = 1
let somaValores = 0
let numValores = 0
let maiorNumero = 0

do {
    operacao = prompt("Deseja realizar um saque ou depósito? S / D")

    if (operacao === "S") {
        do {
            valor = parseFloat(prompt("Digite um valor para saque: "))
            if (valor <= 0) {
                console.log("Por favor, insira um valor positivo maior que zero.")
            }
        } while (valor <= 0)

        if (valor <= saldo) {
            saldo = saldo - valor
            somaValores += valor
            numValores++
            console.log("Saque realizado com sucesso. Saldo atual de: " + saldo)
        } else {
            console.log("Valor indisponível para saque. Saldo atual de: " + saldo)
        }

    } else if (operacao === "D") {
        do {
            valor = parseFloat(prompt("Digite um valor para depósito: "))
            if (valor <= 0) {
                console.log("Por favor, insira um valor positivo maior que zero.")
            }
        } while (valor <= 0)

        saldo = saldo + valor
        somaValores += valor
        numValores++
        console.log("Depósito realizado. Saldo atual de: " + saldo)

    } else {
        console.log("Opção inválida")
    }

    if (maiorNumero < valor) {
        maiorNumero = valor
    }

    continuar = parseInt(prompt("Deseja continuar? 1 - Sim / 2 - Não"))

} while (continuar === 1)

console.log("Operações finalizadas")
console.log("Saldo de: " + saldo)
console.log("Maior valor movimentado: " + maiorNumero)
console.log("Média dos valores movimentados: " + (somaValores / numValores))
