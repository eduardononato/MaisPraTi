// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário

function ehDataValida(dia, mes, ano){
    
    let day = Number(dia)
    let month = Number(mes)
    let year = Number(ano)
    console.log('testando o git stash')
     
    let isLeapYear = anoBissexto(year)
    let isMonthValid = isMonthAndDayValid(day, month)

    if(isMonthValid && (!isLeapYear && month == 2 && day <= 28)){
        return true 
    }else if(isMonthValid && (isLeapYear && month == 2 && day <= 29)){
        return true
    }else if(isMonthValid && month !== 2){
        return true
    }else{
        return false
    }
} 

function anoBissexto(ano){  
    let finalYY = ano.toString().slice(-2);
    if (finalYY !== '00' && (ano % 4) == 0){
        return true
    }else if(finalYY == '00' && (ano % 400) == 0){
        return true
    }else{
        return false
    }   
}


function isMonthAndDayValid(dia, mes){
    let isDayAndMonthValid = (dia > 0 && dia <= 31 && mes <= 12 && mes > 0) 
    let monthsWith30Days = [4, 6, 9, 11]
    let monthsWith31Days = [1, 3, 5, 7, 8, 10, 12]
    if(isDayAndMonthValid && monthsWith30Days.includes(mes) && dia <= 30){
        return true
    }else if(isDayAndMonthValid && monthsWith31Days.includes(mes) && dia <= 31){
        return true
    }else if(isDayAndMonthValid && mes == 2 && dia <= 29){
        return true
    }else{
        return false
    }
}

// Cenários de testes: Datas válidas
console.log(ehDataValida('15', '06', '2025'))
console.log(ehDataValida('29', '02', '2024'))
console.log(ehDataValida('01', '01', '2000'))

// Cenários de testes: Datas inválidas
console.log(ehDataValida('31', '02', '2023'))
console.log(ehDataValida('99', '99', '9999'))
console.log(ehDataValida('01', '13', '2021'))
console.log(ehDataValida('29', '02', '2025'))