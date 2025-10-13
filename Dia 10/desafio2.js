let numeros = []
let numerosInvertidos = []
let contadorInvertido = 0

for(i = 0; i < 5; i++){
    numeros[i] = prompt(`Insira o elemtno ${i} do conjunto`)
}

for(j = 4; j >= 0; j--){
    numerosInvertidos[contadorInvertido] = numeros[j]
    contadorInvertido++
}

console.log(numerosInvertidos)