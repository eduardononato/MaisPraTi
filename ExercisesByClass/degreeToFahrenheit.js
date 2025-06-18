// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();
   
    // recupera o input do usuário
    const degree = Number(prompt('Digite a temperatura em ºC: '));
    let fahrenheit = (degree * 9/5) + 32;
    console.log(`${degree}ºC são ${fahrenheit}°F1`);
