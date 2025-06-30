// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.

const prompt = require('prompt-sync')();
const tabuadaDo = Number(prompt('Digite qual tabuada deseja imprimir: '))

contador = 1
while(contador <= 10){
    console.log(`${tabuadaDo} X ${contador} = ${contador * tabuadaDo}`)
    contador++
}

// for(contador; contador <= 10; contador++){
//     console.log(`${tabuadaDo} X ${contador} = ${contador * tabuadaDo}`)
// }