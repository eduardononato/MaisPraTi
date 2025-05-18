const prompt = require('prompt-sync')();
const qntNumeros = Number(prompt('Digite a quantidade de números desejados: '))
let soma = 0
contador = 1

for(contador; contador <= qntNumeros; contador++){
    let numInformado = Number(prompt(`Digite o número ${contador}: `))
    soma += numInformado;
}
let media = soma / qntNumeros
console.log(`A média aritmetica dos números informados é: ${media}`)    