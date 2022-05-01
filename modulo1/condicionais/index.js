/*/ --- Exercício de interpretação de código --- //
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
// realiza o teste se o número divisivel por 2 será igual a 0
// números pares ele irá imprimir passou no teste
// números ímpares irá imprimir que não passou no teste
/*/

// --- Exercício 02 --- //

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5 
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// O código serve para declarar ao usuário o valor do item que ele escolheu no supermercado
// Valor da maçã
// Ao retirar o break o valor do item Pêra irá mudar para 5

/// --- Exercício 03 --- ///

const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

// Na primeira linha solicita que o usuário digite um primeiro número
// Ao digitar o número 10 irá passar no teste pois está declarado que o numero sendo maior que 0 irá passar no teste
// o número sendo -10 irá dar erro no console pois não há uma variavel definida dentro da funçao, nao estando dispinível no escopo.









