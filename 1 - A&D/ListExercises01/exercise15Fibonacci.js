// Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

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