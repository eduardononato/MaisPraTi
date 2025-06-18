const prompt = require('prompt-sync')();
let value1 = Number(prompt('Digite o valor1: '))
let value2 = Number(prompt('Digite o valor2: '))

if(value1 < value2){
    console.log(`${value1},${value2}`)
}else if(value1 > value2){
    console.log(`${value2},${value1}`)
}else{
    console.log("Os valores são inválidos ou repetidos.")
}