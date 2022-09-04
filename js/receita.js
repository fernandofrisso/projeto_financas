/*

    criar categorias
    criar subcategorias
    qual conta foi a receita (BB, ITAU, NUBANK, ETC?)
    criar conta
    visualizar por conta
    receita fixa
    repetir
    debito ou credito

    filtrar por data ou periodo
    media receita por periodo
    maior receita


*/
let listaReceita = []

function adicionarReceita(){

    const valorReceita = document.getElementById("valor_receita").value
    const categoriaReceita = document.getElementById("categoria_receita").value
    const dataReceita = document.getElementById("data_receita").value

    if(valorReceita === ''){

        document.getElementById('error_receita').innerHTML = 'O campo valor da receita precisa ser preenchido'

        return
    }

    if(dataReceita === ''){

        document.getElementById('error_receita').innerHTML = 'O campo data da receita precisa ser preenchido'

        return
    }

    document.getElementById('error_receita').innerHTML = ''

    const receita = {
        data: dataReceita,
        valor: valorReceita,
        categoria: categoriaReceita
    }

    listaReceita.push(receita)

    adicionarReceitaNaTabelaDeTransacao(receita)
    obterValorReceita()
    calcularSaldo()

    document.getElementById('sucesso_receita').innerHTML =`A receita de ${categoriaReceita} com o valor de R$ ${valorReceita} foi adicionado com sucesso!`
    
    setTimeout(()=>{
        document.getElementById('sucesso_receita').innerHTML = ''
    },10000)

}

function adicionarReceitaNaTabelaDeTransacao(receita){

    let linhaTabela = document.createElement("tr")

    let celulaData = document.createElement("td")
    let celulaTipoTransacao = document.createElement("td")
    let celulaValorReceita = document.createElement("td")
    let celulaCategoriaReceita = document.createElement("td")

    celulaData.innerText = receita.data
    celulaTipoTransacao.innerText = "receita"
    celulaValorReceita.innerText = `+R$ ${receita.valor}`
    celulaCategoriaReceita.innerText=receita.categoria

    linhaTabela.append(celulaData)
    linhaTabela.append(celulaTipoTransacao)
    linhaTabela.append(celulaValorReceita)
    linhaTabela.append(celulaCategoriaReceita)

    let tabela = document.getElementById("table")

    tabela.append(linhaTabela)

    document.getElementById("valor_receita").value = ""
    document.getElementById("categoria_receita").value = ""

}

function obterValorReceita(){

    let valorTotalReceita = 0

    for (let posicaoReceita=0; posicaoReceita < listaReceita.length; posicaoReceita++){

        let receita = listaReceita[posicaoReceita]

        let valorReceita = receita.valor

        valorTotalReceita = valorTotalReceita + eval(valorReceita)
    }

    document.getElementById("valor_receita_total").innerText = `R$ ${parseFloat(valorTotalReceita).toFixed(2)}`

}