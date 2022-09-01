/* 

- [] Controle de gastos
- [OK] Receitas
- [] Despesas

*/

let listaReceita = []

function adicionarReceita(){

    const valorReceita = document.getElementById("valor_receita").value
    const categoriaReceita = document.getElementById("categoria_receita").value

    listaReceita.push(
        {
            valor: valorReceita,
            categoria: categoriaReceita
        }
    )

    let linhaTabela = document.createElement("tr")
    let celulaTipoTransacao = document.createElement("td")
    let celulaValorReceita = document.createElement("td")
    let celulaCategoriaReceita = document.createElement("td")

    celulaTipoTransacao.innerText = "receita"
    celulaValorReceita.innerText = `+R$ ${valorReceita}`
    celulaCategoriaReceita.innerText=categoriaReceita

    linhaTabela.append(celulaTipoTransacao)
    linhaTabela.append(celulaValorReceita)
    linhaTabela.append(celulaCategoriaReceita)

    let tabela = document.getElementById("table")

    tabela.append(linhaTabela)

    document.getElementById("valor_receita").value = ""
    document.getElementById("categoria_receita").value = ""
}


