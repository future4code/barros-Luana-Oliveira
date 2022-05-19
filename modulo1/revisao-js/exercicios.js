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

    let maior
    let menor
        if (num1 > num2){
            maior = num1
            menor = num2
        } else {
            maior = num2
            menor = num1
        }
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: maior % menor == 0 ? true:false,
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08 // Escreva uma função que, recebendo um número N como parâmetro, retorne os N primeiros números pares
function retornaNPrimeirosPares(n) {
   
    let numeros = [0]
        i = 0
        while(numeros.length < n){
            i+=2
            numeros.push(i)
        }
        return numeros
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
        return "Escaleno"
    } else if (ladoA == ladoB && ladoA == ladoC){
    return "Equilátero"
    } else {
        return "Isósceles"
    }
}


// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
    function maiorMenor(x,y){
        return (x-y)
    }
array.sort(maiorMenor) 
segundoMaior = array[array.length-2]
segundoMenor = array[1]
return [segundoMaior, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
    let frase = ""
    for (let ator of filme.atores) {
        frase += ator + ", "
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
}


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
    let pessoaAnonima = {
        ...pessoa,
        nome: "ANÔNIMO"

    }
    return pessoaAnonima

}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
    pessoasAutorizadas = pessoas.filter((item)=>{
        return item.idade > 14 && item.idade < 60 && item.altura >= 1.5
    })
 return pessoasAutorizadas

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
    pessoasNaoAutorizadas = pessoas.filter((item)=>{
        return item.idade <= 14 || item.idade >= 60 || item.altura < 1.5
    })
 return pessoasNaoAutorizadas
}


// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    
}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
    let consultarOrdemAlfabetica = consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      });

    return consultarOrdemAlfabetica 

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}