let livraria = [
    {tiulo: "1984", autor: "George Orwell", ano: 1984},
    {tiulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    {tiulo: "Código Limpo", autor: "Martin", ano: 2010},
    {tiulo: "0 Príncipe", autor: "Maquíavel", ano: 1999},
]

// For Of para iterar e verificar os livros publicados antes do ano 2000

let booksUntil2000 = []
for (livro of livraria){
    if(livro.ano < 2000){
        booksUntil2000.push(livro)
    }
}
console.log(booksUntil2000)