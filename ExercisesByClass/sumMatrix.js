// let myMatrix = [
//                     [3, 6 , 9],
//                     [2, 5, 7]
//                ]
// let myMatrix2 = 
//                [   
//                     [3, 6 , 9],
//                     [2, 5, 7]
//                ]
// let soma = 0
// for(let x = 0; x < myMatrix.length; x++){
//     for(let y = 0; y < myMatrix[x].length; y++){
//        soma = soma + myMatrix[x] [y] 
//     }
// }
// console.log(soma)

let matriz1 =   [
                    [1,2],
                    [4,333],
                    [5566,7877]
                ]
let matriz2 =   [
                    [54,7],
                    [9,4114],
                    [5456,777]
                ]

function sumMatrixes(matriz1,matriz2){
    let matriz3 = [] = [];
    for(i = 0; i < matriz1.length; i++){
        for(j = 0; j < matriz1.length; j++){  
            for(z = 0; z < matriz2.length; z++){
                for(u = 0; u < matriz2.length; u++){  
                    matriz3 = [i[j]]  + [z[u]] ;
                }
            }
        }
    }
    console.table(matriz3);
}
sumMatrixes(matriz1, matriz2)