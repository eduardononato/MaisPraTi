const prompt = require('prompt-sync')(); 

    const quantityCigarretsByDay = Number(prompt('Digite a quantidade de cigarros fumados por dia: '));
    const yearsSmoking = Number(prompt('Digite a quantos anos você fuma: '));

    let lifeTimeLooseInDays = (((quantityCigarretsByDay * 365 * yearsSmoking) * 10) / (60 * 24)) 

    console.log(`O entrevistado perdeu ${lifeTimeLooseInDays.toFixed(2)} dias de vida por conta do cigarro`)
