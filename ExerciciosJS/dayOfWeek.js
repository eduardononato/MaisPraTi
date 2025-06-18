const date = new Date();
let dayOfWeek = date.getDay();
if(dayOfWeek == 0 || dayOfWeek == 6){
    console.log('Final de Semana')
}else{
    console.log('Dia da semana')
}
// 0 for Sunday
// 1 for Monday
// 2 for Tuesday
// 3 Wednesday
// 4 Thursday
// 5 Friday
// 6 Saturday