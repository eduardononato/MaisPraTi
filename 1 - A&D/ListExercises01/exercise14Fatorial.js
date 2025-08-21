// Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

const prompt = require('prompt-sync')();
const num = Number(prompt('Digite um número: '))
function fatorial(num){
    let fatorial = 1
    for(let i = 1; i <= num; i++){
        fatorial =  fatorial * i;
    }
    return fatorial;
}

let resultado = fatorial(num);
console.log(resultado)
