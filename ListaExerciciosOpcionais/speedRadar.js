// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h-1, exiba uma mensagem dizendo que o usuário foi multado.
// Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida

const prompt = require('prompt-sync')();

    const speedByCar = Number(prompt('Informe a velocidade do veículo: '))

    if(speedByCar > 80){
        let valueFine = ((speedByCar - 80) * 5).toFixed(2);
        console.log(`O valor da multa é de ${valueFine}`)
    }else{
        console.log("Velocidade abaixo do permitido")
    }

    