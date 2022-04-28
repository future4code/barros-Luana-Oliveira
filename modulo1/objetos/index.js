const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])

/// ----- Respostas ----- ///
// Na primeira impressão será o nome do Matheus Nachtergaele pois ele é o primeiro no índice do elenco 0 se refere ao primeiro.
// Segunda impressão será a Virginia Cavendish pois o comando length -1 irá selecionar o último elemento
// Na terceira impressão será Globo, horário: 14h pois entrou no objeto transmissoes e selecionou o indice dois que nesse caso é o canal Globo.

const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

// ----- Respostas ----- //
// Na primeira impressão será os atributos do cachorro.
// Na segunda impressão será atributos do gato, igual aos do cachorro (raca e idade) apenas alterando o nome para Juba conforme declarado no objeto gato
// Na segunda impressão será atributos da tartaruga, trocando apenas as vogais do nome do gato por A e O.
// O que faz a sintaxe dos três pontos antes do nome de um objeto? Acessa e copia objetos iteráveis.

function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

/// ---- Respostas ---- ///
// Será impresso "False" acredito que isso tenha acontecido pois o backender que entendi como processo interno da funcao, foi determinado como falso.
// Altura não foi definida nenhuma


/// ---- Exercicios de escrita de código --- ///

const people = {
    nome: "Cecilia", 
    apelidos: ["Cica", "Cilha", "Ceci"]
 }
function frase(people){
return `Eu sou ${people.nome}, mas pode me chamar de:${people.apelidos}`    
}
 console.log(frase(people));

 const outroApelido = {
     ...people,
     apelidos: ["Cicilha", "Cici", "Cece"]
 }
console.log(frase(outroApelido));

 /// --- Exercicio 02 --- ///

 const pessoas = [{nome:"Isabel",idade: 32,profissao: "Engenheira",} , {nome:"Camila",idade:28, profissao:"professora"}]


console.log(pessoas[0].nome);
console.log(pessoas[0].nome.length);
console.log(pessoas[0].idade);
console.log(pessoas[0].profissao);
console.log(pessoas[0].profissao.length);
console.log(pessoas[1].nome);
console.log(pessoas[1].nome.length);
console.log(pessoas[1].idade);
console.log(pessoas[1].profissao);
console.log(pessoas[1].profissao.length);

/// --- Exercicio 03 --- ///





