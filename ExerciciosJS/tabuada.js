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