// function progressaoaritmetica(num){
//     let pa = [];
//     for(let i = 1; i <= num; i++){
//         pa.includes(i)
//     }
//     return pa;
// }

// let resultado = progressaoaritmetica(8);
// console.log(resultado)



function pa(primeiroTermo, razao){
    let soma = 0
    for(let i = 0; i < 10; i++){
        if(i == 0){
            let termo = primeiroTermo
            console.log(termo)
        }else{
            termo += razao
            console.log(termo)
        }
    }
}

pa(1,3)