let nome
let idade

console.log(typeof nome , typeof idade)

/* acredito que fica impresso como indefinido pois nao declarei um valor para a variavel */

nome = prompt("Qual seu nome?")
idade = prompt("Qual a sua idade?")
console.log(typeof nome, typeof idade)

/* notei que nao e possivel repetir o nome das variaveis */

console.log("Olá" , nome , "você tem" , idade , "anos")


/* --- segunda parte do exercicio com perguntas sim ou nao --- */

let musica = "Voce gosta do genero rock? Sim"
let atividades = "Voce pratica atividade fisica? Sim"
let roupa = "Voce esta usando alguma roupa branca hoje? Nao"

musica = prompt("Voce gosta do genero rock?")
atividades = prompt("Voce pratica atividade fisica?")
roupa = prompt("Voce esta usando alguma roupa branca hoje?")

console.log( musica , atividades , roupa)

/* --- terceira parte do exercicio variaveis a e b --- */

let a = 10
let b = 25
c=a
b=c
c=b 

console.log("O novo valor de a é", c)
console.log("O novo valor de b é", b)

/* tentei utilizar a dica dos copos para realizar a ultima parte do exercicio, atribiu o valor de c igual ao de a para imprimir igual a b no console */

