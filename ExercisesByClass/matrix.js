// let matriz = []; 
// for(i = 0; i < 3; i++){
//     matriz[i] = []
//     for(j = 0; j < 3; j++){
//         matriz [i] [j] = 10;
//     }
// }
// console.table(matriz);

// // Calculem a diagonal dessa matriz
// for(l = 0; l < matriz.length(); l++){
//     for(f = 0; f < matriz.length(); f++){
//         l + f
//     }  
// }


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
