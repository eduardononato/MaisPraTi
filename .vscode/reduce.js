let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let soma = numeros.reduce((acumulador, valor) =>
    acumulador + valor, 0)

let pares = numeros.filter(num => num % 2 == 0)
console.log(pares);