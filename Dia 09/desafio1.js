let continuar
do {    let nome = prompt("Qual o seu nome?")
    let idade = parseInt(prompt("Qual sua idade?"))
    let peso = parseFloat(prompt("Qual seu peso?"))
    let altura = parseFloat(prompt("Qual sua altura?"))
    let profissao = (prompt("Qual sua profissão?"))

    console.log("Olá "+nome+", você tem "+idade+" anos, é "+profissao+", tem "+altura+"m de altura e pesa "+peso+"kg.")

    if (idade >=18) {
        console.log("Está liberado para tomar umas geladas")
    } else {
        console.log("Sem gelada para você")

    }

    console.log("Sua idade em meses é: " + (idade*12))
    console.log("Sua idade em semanas é: " + (idade*52))
    console.log("Sua idade em dias é: " + (idade*365))


    let imc = peso / (altura*altura)
    console.log("Seu IMC é: "+ imc)
    if(imc < 18.5){
        console.log("Está na faixa de magreza")
    } else if (imc < 24.9){
        console.log("Está na faixa normal")
    }else if (imc < 30){
        console.log("Está na faixa de sobrepeso")
    }else {
        console.log("Está na faixa de obesidade")
        
    }

    let anoNascimento = 2025-idade  
    console.log("Você nasceu em: " + anoNascimento)

    for(i = 0; i <= idade; i++){
        console.log((anoNascimento+i)+ " - " + i + " anos de idade")
    }

    continuar = parseInt(prompt("Deseja continuar? 1- sim / 2 - não"))

} while (continuar === 1)