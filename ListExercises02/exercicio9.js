// Escreva duas funções:
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave,
// valor], ... ] e retorna o objeto equivalente.
// ○ objetoParaPares(obj) faz o inverso, retornando um array de
// pares.


let myArray = [
  ["nome", "Eduardo"],
  ["idade", 26],
  ["cidade", "São Bernardo do Campo"]
]


function paresParaObjeto(pares){
    let myObj = Object.fromEntries(pares)
    return myObj
}

myobj = paresParaObjeto(myArray)
console.log(myobj)

function objetoParaPares(obj){
    let myArray = Object.entries(obj)
    return myArray
}

console.log(objetoParaPares(myobj))