let listaDespesa =[]

function adicionarDespesa(){

    // buscando valor de despesa na tag input do html
    const valorDespesa = document.getElementById("valor_despesa").value
    const categoriaDespesa = document.getElementById("categoria_despesa").value
    const valorSaldo = document.getElementById("valor_saldo_total").innerText.replace("R$ ", "")
    const dataDespesa = document.getElementById("data_despesa").value

    if(valorDespesa === ''){

        document.getElementById('error').innerHTML = 'O campo valor da despesa precisa ser preenchido'

        return
    }

    if(dataDespesa === ''){

        document.getElementById('error').innerHTML = 'O campo data da despesa precisa ser preenchido'

        return
    }

    document.getElementById('error').innerHTML = ''

   

    // se a minha receita for maior ou igual a minha despesa = operação foi realizada
    // senão, operação será negada 

    if( eval(valorSaldo) >= eval(valorDespesa) ){

        document.getElementById("error").innerText = ""

         // adicionando os valores para a nossa lista  "despesa"

        let despesa = {
            data: dataDespesa,
            valor: valorDespesa,
            categoria: categoriaDespesa
        }
    
        listaDespesa.push(despesa)
    
        adicionarDespesaNaTabelaDeTransacao(despesa)
        obterValorTotalDespesa()
        calcularSaldo()    

        document.getElementById('sucesso_despesa').innerHTML =`A despesa de ${categoriaDespesa} com o valor de R$ ${valorDespesa} foi adicionado com sucesso!`

        setTimeout(()=>{
            document.getElementById('sucesso_despesa').innerHTML = ''
        },10000)

    } else {

        document.getElementById("error").innerText = 
            `A despesa de ${categoriaDespesa} não pode ser efetuada, pois o valor da despesa de R$ ${valorDespesa} é maior do que seu saldo de R$ ${valorSaldo}`    
    
        document.getElementById("valor_despesa").value = ""
        document.getElementById("categoria_despesa").value = ""


    }

    

}

function adicionarDespesaNaTabelaDeTransacao(despesa){
    
    let linhaTabela = document.createElement("tr")

    let celulaData = document.createElement("td")
    let celulaTipoTransacao = document.createElement("td")
    let celulaValorDespesa = document.createElement("td")
    let celulaCategoriaDespesa = document.createElement("td")

    celulaData.innerText = despesa.data
    celulaTipoTransacao.innerText = "Despesa"
    celulaValorDespesa.innerText = `-R$ ${despesa.valor}`
    celulaCategoriaDespesa.innerText=despesa.categoria

    linhaTabela.append(celulaData)
    linhaTabela.append(celulaTipoTransacao)
    linhaTabela.append(celulaValorDespesa)
    linhaTabela.append(celulaCategoriaDespesa)

    let tabela = document.getElementById("table")

    tabela.append(linhaTabela)

    document.getElementById("valor_despesa").value = ""
    document.getElementById("categoria_despesa").value = ""

}

function obterValorTotalDespesa(){

    let somaTotalDespesa = 0

    listaDespesa.map( ({ valor }) => somaTotalDespesa = somaTotalDespesa + eval(valor) )

    document.getElementById("valor_despesa_total").innerText = `R$ ${parseFloat(somaTotalDespesa).toFixed(2)}`

}
