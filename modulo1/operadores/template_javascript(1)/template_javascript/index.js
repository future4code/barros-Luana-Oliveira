//// ---- Exercicio 01 ---- ////
/*/
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)

// a - false, retorna oposto b - false, possui variante falsa c - true d - boolean resultado true ou false /* 

//// --- Exercicio 02 ---- ////

/*let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)

O erro do código acima acontece em razao do prompt ser uma string e no codigo nao foi convertido para number 

/// --- Exercicio 03 --- ///
/* O codigo pode ser corrigido com o comando number ao lado da string */

/*/   ---- Exercicio escrita de codigo ----
let suaidade
let idadeamigo
let idademaior

console.log(typeof suaidade , typeof idadeamigo)

suaidade = Number(prompt("Digite a sua idade"))
idadeamigo = Number(prompt("Digite a idade do seu melhor amigo"))

idademaior = suaidade > idadeamigo

console.log(idademaior)
console.log(suaidade - idadeamigo) */

/*/ ---- Exercicio 02 ----- ///

let numeropar = prompt("Digite um numero par")

console.log(numeroPar % 2)

se o numero for par o resultado sera igual a 0 e se o numero for impar sera igual a 1 



/// --- Exercicio 03 --- ///

let idade = prompt("Qual sua idade?")
let idadeMeses = 12 * idade
let idadeDias = 365 * idade
let idadeHoras = 24 * 365 * idade

console.log(idadeMeses , "meses")
console.log(idadeDias , "dias")
console.log(idadeHoras , "horas")










 










