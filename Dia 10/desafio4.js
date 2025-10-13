let numInicial = parseInt(prompt("Insira o número inicial"))
let fibonacci = []
fibonacci[0] = numInicial -1
fibonacci[1] = numInicial

for (i = 2; i < 10; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
}

console.log(fibonacci)
