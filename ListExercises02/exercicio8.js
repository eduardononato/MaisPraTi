// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

let baseCustomer = [
    {
        cliente: "Julia Aguiar", total: 100
    },
    {
        cliente: "Eduardo Nonato", total: 10
    },
    {
        cliente: "Julia Aguiar", total: 20
    },
    {
        cliente: "Aparecida Ferreira", total: 1000
    }
]

baseCustomerSumTotal = baseCustomer.reduce((acc, customer)  => {  
    if(acc[customer.cliente]){
        acc[customer.cliente] += customer.total
    }else{
        acc[customer.cliente] = customer.total
    }
    return acc
}, {})
console.log(baseCustomerSumTotal)