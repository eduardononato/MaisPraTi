// Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

const prompt = require('prompt-sync')();
const valorA = Number(prompt('Digite um número: '))

for(i = 10; i >= 0; i--){
    console.log(valorA)
}