let nota = parseFloat(prompt("Qual a nota?"))
let sexo = prompt("Qual o sexo? H / M")
let continuar = prompt("Deseja continuar? S / N")
let numAlunos = 1
let somaNotas = nota
let numHomens = 0
let maiorNotaHomem = 0
let mulAcima7 = 0

if (sexo === "h") {
    numHomens = 1
    maiorNotaHomem = nota
}

if (sexo === "m" && nota > 7) {
    mulAcima7++
}

while (continuar === "s") {
    nota = parseFloat(prompt("Qual a nota?"))
    sexo = prompt("Qual o sexo? H / M")
    somaNotas += nota
    numAlunos ++

    if (sexo === "h") {
    numHomens ++
    if (nota > maiorNotaHomem) {
       maiorNotaHomem = nota 
        }
    }

    if (sexo === "m" && nota > 7) {
        mulAcima7++
    }


    continuar = prompt("Deseja continuar? S / N")
}

console.log("A média geral foi de: " + (somaNotas / numAlunos))
console.log("A quantidade de homens foi de: " + numHomens)
console.log("A quantidade de mulheres acima de 7 foi de: " + mulAcima7)
console.log("A maior nota entre os homens foi de: " + maiorNotaHomem)
