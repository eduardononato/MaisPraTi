// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();

// recupera o input do usuário
    let idade = prompt('Digite uma idade: ')

// Verifica a idade

if(idade <= 13){
    console.log(`Com ${idade} anos de idade você é uma criança`)
}else if(idade > 13 && idade <= 18){
    console.log(`Com ${idade} anos de idade você é um adolescente`)
}else if(idade > 18 && idade <= 60){
    console.log(`Com ${idade} anos de idade você é um adulto chato!!`)
}else if(idade > 60){
    console.log(`Com ${idade} anos de idade você é um velho(a)!!`)
}else{
    console.log("Idade inválida")
}
