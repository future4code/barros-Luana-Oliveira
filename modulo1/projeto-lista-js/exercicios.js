// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma(8,5))

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // Solicitar ao usuario altura e largura com o prompt e depois multiplar os valores
  let alt = Number(prompt("Digite um valor de altura para um retângulo:"))
  let larg = Number(prompt("Digite a largura para calcularmos a área do retângulo:"))
  let area = alt * larg

  console.log(area);
}



// EXERCÍCIO 02
function imprimeIdade(anoAtual, anoNascimento) {
  // Pedir ao usuario ano atual, ano de nascimento e subtrair os dois
let currentYear = Number(prompt("Em que ano estamos?"))
let yearBirth = Number(prompt("Qual seu ano de nascimento?"))
let idade = currentYear - yearBirth

console.log(idade);



}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // Calcular o imc
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // Solicitar ao usuario seus dados atraves do prompt
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt("Qual seu nome?")
  let idade = Number(prompt("Qual é a sua idade?"))
  let email = prompt("Digite o seu email:")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)


}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // Perguntar ao usuario suas cores favoritas e imprimir o array
  let cor1 = prompt("Digite sua cor favorita")
  let cor2 = prompt("Digite sua segunda cor favorita")
  let cor3 = prompt("Digite sua terceira cor favorita")
  let cores = [cor1,cor2,cor3]
console.log(cores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // Usar comando touppercase
  let frase = string.toUpperCase()
  return frase

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // retornar o valor do ingresso
  let valorIng = custo / valorIngresso
  return valorIng

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  let strin = string1.length
  let strin2 = string2.length
  return strin === strin2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  let one = array[0]
  return one

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // Utilizar comando pop para chegar ao ultimo elemento do array
  let last = array.pop()
  return last

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let ultimoNumero = array.length -1
  let novoArray = array.splice(0,1, array[ultimoNumero])
  array.splice(ultimoNumero, 1, novoArray[0])
  return array
  
}
console.log(trocaPrimeiroEUltimo([1,2,3,4,5]))

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const igualdade = string1.toUpperCase() == string2.toUpperCase()

  return igualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}