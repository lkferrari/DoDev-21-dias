let qtdElemento = parseInt(prompt("Quantos elementos deseja inserir?"))
let numeros = []
let numerosInvertidos = []
let contadorInvertido = 0

for(i = 0; i < qtdElemento; i++){
    numeros[i] = prompt(`Insira o elemtno ${i} do conjunto`)
}

for(j = (qtdElemento-1); j >= 0; j--){
    numerosInvertidos[contadorInvertido] = numeros[j]
    contadorInvertido++
}

console.log(numerosInvertidos)