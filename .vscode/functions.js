// function ordenarArray(valores){
//     let arrayOrdenado =  valores.sort((a, b) => a - b)
//     return arrayOrdenado
// }    

// meuArray = [6,889,900,344,56,884]
// console.log(ordenarArray(meuArray));


function somaElementos(valores1){
    let soma = 0;
    for(i = 0; i < valores1.length; i++){
        soma = soma += valores1[i]
    }
    return soma
}

let numSum = [26,26,26];
console.log(somaElementos(numSum))

