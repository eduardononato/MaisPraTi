// let myArray = [3, 6, 1, 2, -3]
 
// for(let i = 0; i < myArray.length; i++){
//     for(let x = 0; x < myArray.length; x++){
//         if(myArray[i] < myArray[x]){
//             let aux = myArray[i]
//             myArray[i] = myArray[x]
//             myArray[x] = aux
//         }
//     }
// }
// console.log(myArray)


//bubbleSort
let numeros = [3, 6, 1, 2, -3]
let n = numeros. length

for(let i = 0; i < n; i++){
    for(let j = 0; j < n - i; j++){
        if(numeros[j] > numeros[j +1]){
            let temp =  numeros [j]
            numeros [j] = numeros[j + 1]
            numeros[j + 1] = temp
        }
    }
}
console.log(numeros)