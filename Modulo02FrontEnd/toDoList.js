const formAdicionar = document.getElementById('formAdicionar');
const inputItem = document.getElementById('inputItem');
const listaItens = document.getElementById('listaItens');
const btnLimpar = document.getElementById('btnLimpar');

let itens = [];

formAdicionar.addEventListener(submit, (event) => {
    const novoItem = inputItem.value.trim();
    if(!novoItem) {
        return
    }
    itens.push(novoItem)
    salvarDados()
    renderizarLista()   

    inputItem.value = ''
} )