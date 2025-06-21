// let numA = 1
// let numB = 1
// let numC = 0

// for(let i = 0; i <= 10; i++){
//     if(i == 0){
//         console.log(numA)
//     }
//     numC = numB 
//     numB = numB + numA
//     numA = numC
//     console.log(numB)
// }





function fibonacci(num){
    let a = 1
    let b = 1
    let c = 0
    console.log(c)
    console.log(a)
    for(let i = 3; i <= num; i++){
        a = a + c
        c = b
        b = a
        console.log(a)
    }
}

fibonacci(10)