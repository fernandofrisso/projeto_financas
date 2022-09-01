let despesa =[]

function adicionarDespesa(){

    // buscando valor de despesa na tag input do html
    const valorDespesa = document.getElementById("valor_despesa").value
    const categoriaDespesa = document.getElementById("categoria_despesa").value

    // adicionando os valores para a nossa lista  "despesa"

    listaReceita.push(

        {
            valor: valorDespesa,
            categoria: categoriaDespesa
        }

    )

    // criando linhas da nossa tabela

    let linhaTabela = document.createElement("tr")
    let celulaTipoTransacao = document.createElement("td")
    let celulaValorDespesa = document.createElement("td")
    let celulaCategoriaDespesa = document.createElement("td")

    celulaTipoTransacao.innerText = "despesa"
    celulaValorDespesa.innerText = `-R$ ${valorDespesa}`
    celulaCategoriaDespesa.innerText= categoriaDespesa

    linhaTabela.append(celulaTipoTransacao)
    linhaTabela.append(celulaValorDespesa)
    linhaTabela.append(celulaCategoriaDespesa)

    let tabela = document.getElementById("table")

    tabela.append(linhaTabela)

    document.getElementById("valor_despesa").value = ""
    document.getElementById("categoria_despesa").value = ""
}


