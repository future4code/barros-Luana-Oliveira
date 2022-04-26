/// ----- Exercicio de interpretaçao de código 01 ----- ///
/* Resposta é "a" unico item na lista array sem mais nenhuma atribuiçao 

b. null - a array foi declarada vazia 

c. 11 - o comando length contabilizou os caracteres dentro dos [] 

d. Array não definida 

e. Array não definida 

f. Sem definição

---- Exercicio 02 ---- 

SUBI NUM ONIBUS EM MIRROCOS 27 */

// ---- Exercicio de escrita de código ---- */

/*/ let nomeDoUsuarui=prompt(`Qual o seu nome?`)
let emailDoUsuario=prompt(`Qual o seu e-mail?`)

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuarui} ! `);

*/

// --- Exercicio 02 --- // 

/*let minhasComidas=["Pizza", 
"hamburguer", 
"lasanha", 
"churrasco", 
"batata frita"]
console.log(minhasComidas);

let comidaUsuario=prompt("Qual é a sua comida favorita?")
console.log(comidaUsuario)

console.log(minhasComidas.replaceAll("hamburguer" , comidaUsuario));
// o comando replaceAll não funcionou nessa função */

// --- Exercicio 03 --- //

let listaDeTarefas=[]
let tarefa1=prompt("Digite a primeira tarefa que você precisa fazer hoje")
let tarefa2=prompt("Digite a segunda tarefa que você precisa realizar hoje")
let tarefa3=prompt("Digite a terceira tarefa que você precisa fazer hoje")

listaDeTarefas[tarefa1, tarefa2, tarefa3]
console.log("as tarefas são", listaDeTarefas)
let tarefasFeitas=Number(prompt("Digite o indice da tarefa que você realizou, 0, 1 ou 2 sendo 0 o primeiro e assim por seguinte"))
listaDeTarefas.splice(tarefasFeitas, 1)
console.log(`Restam ${listaDeTarefas.length} tarefas para realizar e elas são ${tarefasFeitas}`)























