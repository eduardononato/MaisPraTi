let numA = 1
let numB = 1
let numC = 0

for(let i = 0; i <= 10; i++){
    if(i == 0){
        console.log(numA)
    }
    numC = numB 
    numB = numB + numA
    numA = numC
    console.log(numB)
}

