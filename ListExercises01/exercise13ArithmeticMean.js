// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

const prompt = require('prompt-sync')();
let soma = 0
let contador = 0
let numInformado = 0

do {
  numInformado = Number(prompt(`Digite um número e digite 0 para calcular a média dos número anteriores: `))
  soma += numInformado;
  contador++
}while(numInformado !== 0)
let media = soma / (contador-1)

console.log(`A média aritmetica dos números informados é: ${media}`)
