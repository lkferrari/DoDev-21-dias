let numero = parseInt(prompt("Insira um número"))
let array = []
let resultado = []
let indiceResultado = 0

for(i = 0; i < 10; i++){
    array[i] = parseInt(prompt("Insira o número para o indice " + i))

}

for(i = 0; i < 10; i++){
    if(array[i] === numero){
        resultado[indiceResultado] = i
        indiceResultado ++
    }

}
console.log(`O número ${numero} foi localizado nos indices ${resultado}`)
