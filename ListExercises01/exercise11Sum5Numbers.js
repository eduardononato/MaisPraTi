// Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

const prompt = require('prompt-sync')();
const valor1 = Number(prompt('Digite o número 1: '))
const valor2 = Number(prompt('Digite o número 2: '))
const valor3 = Number(prompt('Digite o número 3: '))
const valor4 = Number(prompt('Digite o número 4: '))
const valor5 = Number(prompt('Digite o número 5: '))
let arrays = [valor1, valor2, valor3, valor4, valor5]
let resultado = 0
for(i = 0; i < arrays.length; i++){
    resultado += arrays[i] 
}
console.log(resultado)