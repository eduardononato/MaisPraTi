// utilizar importar o modulo prompt-sync, biblioteca do JS
const prompt = require('prompt-sync')();

// recupera o input do usuário
let opcao = Number(prompt('Informe a opção desejada: \n 1- Verificar o dia de hoje \n 2 - Hello World! \n 3 - Informe a previsão do Tempo \n'))

switch (opcao) {
    case 1:
        console.log(new Date());
        break
    case 2:
        console.log(`Hello World`);
        break
    case 3:
        console.log(`Chuva`);
        break
    default:
        console.log("Opção inválida inválida")
}