// Implemente function fatorial(n) de forma recursiva; trate n < 0 lançando
// um Error, e n === 0 retornando 1.

function fatorial(n){
    if(n < 0){
        throw new Error("Valor inválido. n não pode ser negativo!");   
    }else if (n === 0){
        return 1
    }else{
        return n * fatorial(n - 1)
    }
}