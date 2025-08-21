// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado

const prompt = require('prompt-sync')(); 
let randomNumber = Math.floor(Math.random() * 100) +1;
let inputNumber = 0
let counter = 0
do{ 
    counter ++
    inputNumber= Number(prompt('Digite um número aleatório entre 0 e 100: '))
    if(inputNumber < randomNumber){
        console.log('mais alto')
    }else if(inputNumber > randomNumber){
        console.log('mais baixo')
    }
} while(randomNumber !== inputNumber)
        console.log(`Você acertou em ${counter} tentativas`)