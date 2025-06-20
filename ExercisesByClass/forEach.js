    // let livraria = [
    //     {titulo: "1984", autor: "George Orwell", ano: 1984},
    //     {titulo: "O Profeta", autor: "Endrew Berthold", ano: 2001},
    //     {titulo: "Código Limpo", autor:"Martin", ano: 2010},
    //     {titulo: "O velho e o Mar", autor: "Hemmingway", ano: 1910},
    //     {titulo: "O Principe", autor: "Maquiável", ano: 2002},
    // ]

    // for(let livro in livraria) {
    //     console.log(livro)
    // }

    // for(let livro of livraria) {
    //     console.log(livro.ano)
    // }
    
    let filmes = [
        {titulo:"Minha Mae e uma Peça", genero: "Comedia"},
        {titulo:"Tarzan", genero: "Aventura"},
        {titulo:"Como eu Era Antes de Voce", genero: "De chorar"},
        {titulo: "Jogo da Imitação", genero: "Historico"},
        {titulo:"Top Gun", genero: "Guerra"},
        {titulo:"Your Name", genero: "Romance"},
        {titulo: "Deadpool", genero: "Heroi"},
        {titulo:"Batman Forever", genero: "Heroi"}
    ]

    
    // Listem a contagem de generos desses filmes
    let contagemFilmes = {}
    
    filmes.forEach((filme) => {
        if(contagemFilmes[filme.genero]){
            contagemFilmes[filme.genero]++
        }else{
            contagemFilmes[filme.genero] = 1
        }
    })
    console.table(contagemFilmes)

    // let quantityMovieByGenero = [        
    //     {genero: "Comedia", quantidade: 0},
    //     {genero: "Aventura", quantidade: 0},
    //     {genero: "De chorar", quantidade: 0},
    //     {genero: "Historico", quantidade: 0},
    //     {genero: "Guerra", quantidade: 0},
    //     {genero: "Romance", quantidade: 0},
    //     {genero: "Heroi", quantidade:0}
    // ]

    // for(let filme of filmes){ 
    //     for(let quantity of quantityMovieByGenero){
    //         if(quantity.genero == filme.genero){
    //             quantity.quantidade ++
    //         }
    //     }
    // }   
    // console.log(quantityMovieByGenero)