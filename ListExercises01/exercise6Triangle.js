// Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();
const valorA = Number(prompt('Digite o primeiro valor: '))
const valorB = Number(prompt('Digite o segundo valor: '))
const valorC = Number(prompt('Digite o terceiro valor: '))
const isValid = (valorA < (valorB + valorC)) && (valorB < (valorA + valorC)) && (valorC < (valorA + valorB)) ? true : false

if((isValid == true) && (valorA == valorB || valorA==valorC || valorB==valorC)){
    if(valorA == valorB && valorB == valorC){
        console.log("Triângulo eqüilátero e isósceles")
}else{
    console.log("Triângulo isósceles")
 }
}else if((isValid == true) && (valorA !== valorB && valorB !== valorC)){
    console.log("Triângulo escaleno")
 }else if((isValid == false)){
    console.log("Triângulo inválido")
 }else{
    console.log("Valores inválidos")
 }