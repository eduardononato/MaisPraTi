// . Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
// Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
// R$ 0.45 para viagens mais longas.

const prompt = require('prompt-sync')(); 
 
const quantityKM = Number(prompt('Digite a quantidade de KM: '));
console.log(calcPriceByKM(quantityKM))

function calcPriceByKM(quantityKM){
    let price = 0;
    if(quantityKM < 200){
        price = quantityKM * 0.5
        return price
    }else if (quantityKM > 200){
        price = quantityKM * 0.45
        return price
    }else{
        return "Valor inválido"
    }
}