function formatterDate(inpDate){
    let day = inpDate.getDate().toString().padStart(2,'0')
    let month = (inpDate.getMonth()+1).toString().padStart(2,'0').padStart(2,'0')
    let year = inpDate.getFullYear().toString()
    return `${day}/${month}/${year}`   
}
    let date01 = new Date(1999, 2,25);
    console.log(date01.toString())
    console.log(formatterDate(date01))

