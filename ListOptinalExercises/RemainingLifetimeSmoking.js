// Escreva um programa para calcular a redução do tempo de vida de um fumante.
// Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
// Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
// vida um fumante perderá e exiba o total em dias.

const prompt = require('prompt-sync')(); 

    const quantityCigarretsByDay = Number(prompt('Digite a quantidade de cigarros fumados por dia: '));
    const yearsSmoking = Number(prompt('Digite a quantos anos você fuma: '));

    let lifeTimeLooseInDays = (((quantityCigarretsByDay * 365 * yearsSmoking) * 10) / (60 * 24)) 

    console.log(`O entrevistado perdeu ${lifeTimeLooseInDays.toFixed(2)} dias de vida por conta do cigarro`)
