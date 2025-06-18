const prompt = require('prompt-sync')();
let numberInput = 0;
do{
    numberInput = Number(prompt('Digite um número para saber se é positivo ou negativo. Digite 0 para encerrar: '))
    if(numberInput < 0){
        console.log(`O número ${numberInput} é negativo`)
    }else if (numberInput > 0){
        console.log(`O número ${numberInput} é positivo`)
    }
}while(numberInput !== 0)