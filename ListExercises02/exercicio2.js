// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado

const prompt = require('prompt-sync')(); 
let inputNumber = Number(prompt('Digite um número aleatório entre 0 e 100: '));
let randomNumber = 10
do{
    console.log('O número informado é menor do que o número sorteado')
}while(randomNumber !== inputNumber)