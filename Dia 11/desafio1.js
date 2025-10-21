let nomes = []
let notas = []
let continuar = 0
let somaNotas = 0
let qtdNotas = 0

do {
    let nome = prompt("Qual o nome do aluno?")
    let nota = parseFloat(prompt("Qual a nota do aluno?"))

    nomes[qtdNotas] = nome
    notas[qtdNotas] = nota

    somaNotas = somaNotas + nota
    qtdNotas++
    continuar = prompt("Deseja copntinuar? Digite 1 para sim")
    
} while(continuar == 1)

for(i = 0; i < qtdNotas; i++){
    console.log(`${nomes[i]} -> ${notas[i]}`)
}


console.log("A soma das notas foi: " + somaNotas)
console.log("A média das notas foi: " + (somaNotas/qtdNotas))
