let numEleitoresMunicipio = 333
let votosBrancos = 33
let votosNulos = 200
let votosValidos = 100

let percVotosBrancos = (votosBrancos/numEleitoresMunicipio*100)
let percvotosNulos = (votosNulos/numEleitoresMunicipio*100)
let percvotosValidos = (votosValidos/numEleitoresMunicipio*100)

console.log(`Percentual de votos em branco: ${percVotosBrancos.toFixed(2)}%`)
console.log(`Percentual de votos nulos: ${percvotosNulos.toFixed(2)}%`)
console.log(`Percentual de votos válidos: ${percvotosValidos.toFixed(2)}%`)

