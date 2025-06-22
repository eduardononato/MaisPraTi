// // function soma(n){
// //     if(n === 1){
// //         return 1   
// //     }else{
// //        return n + soma(n - 1)
// //     }
// // }

// // console.log(soma(3))



// let categorias = [
//     {
//         id: 1,
//         nome: "Eletrônicos",
//         filhos: [
//             {id: 2, nome: "Celulares", filhos: []},
//             {id: 3, nome: "Computadores", filhos: [
//                 {id: 4, nome: "Tablets", filhos: []},
//             ]}
//         ]
//     },
//     {
//         id: 5,
//         nome: "Louças",
//         filhos: []
//     }
// ]

// obj(categorias)

// function obj (cat){
//     if(cat[0] !== null){
//         console.log(cat[0].nome)
//         if(cat[0].filhos !== null){
//             cat[0].filhos[0]
//         }
//     }
// }

// soma dos números de 1 até n

// function sum(num){
//     if(num == 1){
//         return 1
//     }else{
//         return num + sum(num-1)
//     }
// }
// console.log(sum(10))

function fibo(n){
    if(n === 0){
        return 0
    }else if( n === 1 ){ 
        return 1
    }else{  
        return fibo(n - 1) + fibo(n - 2)
    }
}
console.log(fibo(4))