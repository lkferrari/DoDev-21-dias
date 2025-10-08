var continuar = ""

do {var nome = prompt("Qual o seu nome?")
var idade = parseInt(prompt("Qual a sua idade?"))
var salario = parseFloat(prompt("Qual o seu salário atual?"))

console.log("Seu nome é "+ nome + ", você tem "+ idade +" anos e recbe R$"+ salario)

continuar = prompt("As informações etão corretas? S / N")
if(continuar === "S"){
    continuar = 1
} else {
    console.log("Por favorm digite novemte")
}

} while(continuar != 1)