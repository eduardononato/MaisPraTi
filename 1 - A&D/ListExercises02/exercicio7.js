// Dado um array produtos = [{ nome, preco }, ...], crie uma função que
// retorne um novo array apenas com os nomes, ordenados por preço
// crescente, usando map, sort.

let myObj = [
  { nome: "Banana", preco: 10.00 },
  { nome: "Aveia", preco:  5.00 },
  { nome: "Ovo", preco: 20.00 },
  { nome: "Canela", preco: 2.50}
];

function orderByPrice(obj){
    let newObj = obj.sort((a, b) => a.preco - b.preco)
    let myMap = newObj.map(name => name.nome)
    return myMap
}

console.log(orderByPrice(myObj))