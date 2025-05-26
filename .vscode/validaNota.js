// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();

// recupera o input do usuário
    let nota = prompt('Digite uma nota: ')

// Verifica se o aluno foi aprovado, reprovado ou recuperação

if(nota < 5){
    console.log(`Reprovado`)
}else if(nota == 5){
    console.log(`Recuperação`)
}else if(nota > 5){
    console.log(`Aprovado`)
}else{
    console.log("Nota inválida")
}
