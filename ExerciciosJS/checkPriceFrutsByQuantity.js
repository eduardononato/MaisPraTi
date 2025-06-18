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