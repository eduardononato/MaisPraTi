// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay){
    let timer = null
    return function(... args) {
        clearTimeout(timer)

        timer = setTimeout(() => {
            fn.apply(this, args)
        }, delay)
    }
}

function print(text){
    console.log(text)
}


let debounceFn = debounce(print, 1000)
debounceFn('Olá Mundo')