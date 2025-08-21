// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.


const prompt = require('prompt-sync')(); 
let randomSentence = prompt('Digite uma frase: ')
let myArrayOfWords = randomSentence.split(' ')
let uniqueWords = []

for(let i = 0; i < myArrayOfWords.length; i++){
    if(!uniqueWords.includes(myArrayOfWords[i])) {
        uniqueWords.push(myArrayOfWords[i])
    }
}
console.log(uniqueWords)
