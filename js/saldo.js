function calcularSaldo(){

    let receita = document.getElementById("valor_receita_total").innerText.replace("R$ ", "")
    let despesa = document.getElementById("valor_despesa_total").innerText.replace("R$ ", "")

    let saldo = eval(receita) - eval(despesa)

    document.getElementById("valor_saldo_total").innerText = `R$ ${parseFloat(eval(saldo)).toFixed(2)}`
        
}
