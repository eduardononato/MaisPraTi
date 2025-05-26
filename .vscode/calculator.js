// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();
   
    // recupera o input do usuário
    const inputFromUser = prompt('Digite o cálculo: ');

    // identifica o operador informado pelo usuário 
    const index = inputFromUser.search(/[+-\/\*]/);
    var operator = inputFromUser.charAt(index);
    
    // recupera os valores
    let num1 = inputFromUser.substring(0, index);
    let num2 = inputFromUser.substring(index + 1);
    
    // realiza o calculo
    let result = eval(num1 + operator  + num2);
    console.log(result);
