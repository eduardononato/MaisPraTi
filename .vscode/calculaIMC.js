// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();

// recupera o input do usuário
let altura = prompt('Informe a sua altura (metros): ')
let peso = prompt('Informe o seu peso (kg): ')

// realiza o calculo
let imc = peso / (altura * altura)

if(imc < 18.5){
    console.log(`Você está abaixo do peso, seu IMC é ${imc}`);
}else if(imc => 18.5 && imc <= 24.9 ){
    console.log(`Você está com o peso ideal, seu IMC é ${imc}`)
}else if(imc > 24.9 && imc <= 29.9){
    console.log(`Você está com sobrepeso, seu IMC é ${imc}`)
}else if( imc > 29.9){
    console.log(`Você está com obsidade, seu IMC é ${imc}`)
}
else{
    console.log("Altura ou Peso inválidos")
}
