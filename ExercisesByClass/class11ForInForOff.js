// let jogadores = ['Caça Rato', 'Ganso', 'Pato']

// // for in itera sobre índices
// for (let key in jogadores){
//     console.log(jogadores[key])
// }

// let palavra = 'São Paulo'

// // for of itera sobre o valor
// for (let char of palavra){
//     console.log(palavra[char])
// }

// Calculem as médias das notas dos alunos de um Professor e digam
//  se a turma do Professor está na média.

let professor = {
    nome: 'Stark Parker',
    materia: 'Física',
    notas: {
        aluno1: [5,2],
        aluno2: [3,7]
    }
}

let notasByProfessor = []
let soma = 0
for (let aluno in professor.notas){ 
    for (let nota of professor.notas[aluno]){
        notasByProfessor += nota
        soma += nota
    }
}



let averageByProfessor = (soma / notasByProfessor.length)
if(averageByProfessor >= 6){
    console.log(`A média está acima da média. Média: ${averageByProfessor}`)
}else{
    console.log(`A média está abaixo da média. Média: ${averageByProfessor}`)
}