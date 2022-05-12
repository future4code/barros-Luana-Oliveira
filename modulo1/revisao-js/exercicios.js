// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01 // Escreva uma função que recebe um array como parâmetro e retorna a quantidade de elementos que há nele.
function retornaTamanhoArray(array) {
   
    return array.length

}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    
    return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {

    function arrayOrdernado( x,y){
        return (x-y)
    }
  return array.sort(arrayOrdernado)   
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  
    return array.filter((array) => array % 2 == 0)

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
 
    const novoArray = []
    array.filter((numero)=>{
        if(numero % 2 == 0){
        novoArray.push(numero ** 2)    
        }

    })
    return novoArray
}

// EXERCÍCIO 06 // Escreva uma função que receba um array de números e retorne o maior número dele.
function retornaMaiorNumero(array) {
  
    maiorNumero = array[0]
    for (numero of array){
        if (numero > maiorNumero){
            maiorNumero = numero
        }

    }
    return maiorNumero    
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}