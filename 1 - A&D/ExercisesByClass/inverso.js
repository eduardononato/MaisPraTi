// function inverseString(textValue){
//     let inverseText = '';
//     for(i = textValue.length - 1; i >= 0; i--){
//         inverseText += textValue[i];
//     }
    
//     return inverseText
// }
 
// retorno = inverseString('Rafa');
// console.log(retorno)


function findVocal(textValue){
    str = textValue.toLowerCase();
    let numberVocals = 0;
    let vocals = ["a","e","i", "o", "u"];
    for(i = str.length - 1; i >= 0; i--){
        if(vocals.includes(str[i])){
            numberVocals++;
        }
    }
    return numberVocals;
}

retorno = findVocal('Eduardo');
console.log(retorno)