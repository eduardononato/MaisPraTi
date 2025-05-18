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