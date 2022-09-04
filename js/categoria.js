let listaCategoriaReceita =['salario', 'investimento']

let listaCategoriaDespesa =['aluguel', 'comida']


function adicionarCategoria(){

   let nomeCategoria =  document.getElementById('nome_categoria').innerText

   let tipoCategoria = document.getElementById('tipo_categoria').innerText

    if( tipoCategoria === 'despesa'){

        listaCategoriaDespesa.push(nomeCategoria)

   } else {

        listaCategoriaReceita.push(nomeCategoria)

   }


}

function obterListaCategoriaReceita(){
    return listaCategoriaReceita
}

function obterListaCategoriaDespesa(){
    return listaCategoriaDespesa
}