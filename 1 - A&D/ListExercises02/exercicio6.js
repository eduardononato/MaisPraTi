// Implemente function memoize(fn) que armazene em cache chamadas
// anteriores de fn (por argumentos), retornando resultados instantâneos em
// repetidas invocações.

function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}


function fatorial(n){
    if(n == 1){
        return 1
    } return n * fatorial(n-1) 
}
console.log(fatorial(100))
let fatorialWithMemo = memoize(fatorial)
console.log(fatorialWithMemo(100))
