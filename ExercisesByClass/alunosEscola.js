const prompt = require('prompt-sync')(); 
    
    let quantityStudentsC = 60
    let quantityStudentsD = 20
    let quantityTotalStudents = quantityStudentsC + quantityStudentsD;
    const percStudentRepC = Number(prompt('Digite o percentual de alunos reprovados na turma C: '));
    const percStudentAprovD = Number(prompt('Digite o percentual de alunos aprovados na turma D: ')); 
    let studentReprovedD = quantityStudentsD - (percStudentAprovD/100)*quantityStudentsD
    let studentReprovedC = (percStudentRepC/100)*quantityStudentsC
    let totalReprovedCD = studentReprovedD + studentReprovedC
    let percTotalStudentsReproved = (totalReprovedCD/quantityTotalStudents)*100

    console.log(`O número de alunos reprovados na turma C é ${studentReprovedC}`)
    console.log(`O número de alunos reprovados na turma D é ${studentReprovedD}`)
    console.log(`O percentual de alunos reprovados na turma C e D é: ${percTotalStudentsReproved}%`)
