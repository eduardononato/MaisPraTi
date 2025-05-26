const prompt = require('prompt-sync')();
let password = 2807;
let passwordValid = false;


while(passwordValid == false){
    let inputPassword = Number(prompt('Digite a senha com 4 números: '))
    if(inputPassword !== password){
        console.log(`SENHA INVÁLIDA`) 
    }else{
        console.log(`ACESSO PERMITIDO`)
        passwordValid = true;
    }
}