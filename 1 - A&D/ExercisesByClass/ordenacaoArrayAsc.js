let myArray = [3, 4, 5, 1, -3, 2, 10 ,56]

for(let i = 0; i <= myArray.length; i++){
    for(let x = 0; x <= myArray.length; x++){
        if(myArray[i] < myArray[x]){
            let aux = myArray[i]
            myArray[i] = myArray[x]
            myArray[x] = aux
        }
    }
}
console.log(myArray)




