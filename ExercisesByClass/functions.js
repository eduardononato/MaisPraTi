// function ordenarArray(valores){
//     let arrayOrdenado =  valores.sort((a, b) => a - b)
//     return arrayOrdenado
// }

// meuArray = [6,889,900,344,56,884]
// console.log(ordenarArray(meuArray));

// Function
// function somaElementos(valores1){
//     let soma = 0;
//     for(i = 0; i < valores1.length; i++){
//         soma = soma += valores1[i]
//     }
//     return soma
// }

// let numSum = [18, 15, 12];
// console.log(somaElementos(numSum))

// Arrow function
// let resultado = (numSum) => 
//     {
//         let soma = 0;
//         for(i = 0; i < numSum.length; i++){
//             soma = soma += numSum[i]
//         }
//         return soma
//     }
// let numSum = [18, 15, 12]
// console.log(resultado(numSum))

// Anonymous Function
// let resultado = function (numSum)
//     {
//         let soma = 0;
//         for(i = 0; i < numSum.length; i++){
//             soma = soma += numSum[i]
//         }
//         return soma
//     }

// let numSum = [18, 15, 12]
// console.log(resultado(numSum))

    function highestValue(myList){
        let highestValue = 0;
        for(let i = 0; i < myList.length; i++){
            if(highestValue < myList[i]){
                highestValue = myList[i]
            }
        }
        return highestValue
    }

    let numSum = [12, 1, 3, 45, 515]
    console.log(highestValue(numSum))