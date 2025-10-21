let modelos = []
let anos = []
let valores = []
let contador = 0
let continuar = true

while(continuar){
    modelos[contador] = prompt("Digite o modelo do carro de número "+(contador+1))
    anos[contador] = prompt("Digite o ano do carro de número "+(contador+1))
    valores[contador] = prompt("Digite o valor do carro de número "+(contador+1))

    contador++
    continuar = prompt("Deseja constinuar? S/N")
    if(continuar.toLowerCase() === "n"){
        continuar = false
    }else continuar = true
}

for(i=0; i<contador; i++){
    console.log(`${modelos[i]}, ${anos[i]} Valor: R$${valores[i]}`)
}
/**/
for(j = 0; j < valores.length - 1; j++){
    for(k = 0; k < valores.length-j-1; k++){
        if(valores[k] < valores[k+1]){

            let maiorValor = valores[k+1]
            valores[k+1] = valores[k]
            valores[k] = maiorValor

            let maiorAno = anos[k+1]
            anos[k+1] = anos[k]
            anos[k] = maiorAno

            let maiorModelo = modelos[k+1]
            modelos[k+1] = modelos[k]
            modelos[k] = maiorModelo


        }
    }
}

console.log("Ordenando por valor:")
for(i=0; i<contador; i++){
    console.log(`${modelos[i]}, ${anos[i]} Valor: R$${valores[i]}`)
}

/**/