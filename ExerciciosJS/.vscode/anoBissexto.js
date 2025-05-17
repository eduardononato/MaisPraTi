let ano = '2022';
let finalYY = ano.slice(-2);

if (finalYY !== '00' && (ano % 4) == 0){
    console.log(`O ano ${ano} é bissexto!`)
}else if(finalYY == '00' && (ano % 400) == 0){
    console.log(`O ano ${ano} é bissexto!`)
}
else{
    console.log(`O ano ${ano} não é bissexto! Testeeee`)
}

    
    