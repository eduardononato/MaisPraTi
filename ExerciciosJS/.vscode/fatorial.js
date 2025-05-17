function fatorial(num){
    let fatorial = 1
    for(let i = 1; i <= num; i++){
        fatorial =  fatorial * i;
    }
    return fatorial;
}

let resultado = fatorial(8);
console.log(resultado)