// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();
let qntApples = Number(prompt('Digite a quantidade de maças: '))
let priceUntil12 = 0.30
let priceMoreThan12 = 0.25
if(qntApples <= 12){
    finalPrice = qntApples * priceUntil12
    console.log(`O valor da compra é ${finalPrice.toFixed(2)}`)
}else if(qntApples > 12){
    finalPrice = qntApples * priceMoreThan12
    console.log(`O valor da compra é ${finalPrice.toFixed(2)}`)
}else{
    console.log("Quantidade inválida")
}