/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

    console.log("Boas vindas ao jogos de Blackjack!")

let iniciarPartida = confirm("Bem vindo(a), você deseja iniciar uma rodada? ♦️ ♥️ ♣️ ♠️")

if (iniciarPartida) {
   let carta1Usuario = comprarCarta()
   let carta2Usuario = comprarCarta()
   let carta1Computador = comprarCarta()
   let carta2Computador = comprarCarta()

   let pontuacaoUsuario = carta1Usuario.valor + carta2Usuario.valor
   let pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log(`Usuario - cartas: ${carta1Usuario.texto} ${carta2Usuario} - ${pontuacaoUsuario}`);
   console.log(`Computador - cartas: ${carta1Computador.texto} ${carta2Computador.texto} - ${pontuacaoComputador}`);

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("Parabéns, você ganhou!!!");
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou!!!");
   } else if (pontuacaoComputador === pontuacaoUsuario) {
      console.log("Empate!!!");  
    }

} else {
   console.log("O jogo acabou.");
   }

   


