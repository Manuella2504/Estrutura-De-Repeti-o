/*Crie um script que use um loop while para simular um jogo de adivinhação,
 onde o usuário precisa adivinhar um número secreto entre 1 e 10. */

let numero = 2;
let tentativa = 7;

while (tentativa !== numero) {
   console.log("Adivinhe o número secreto entre 1 e 10:");

    if (tentativa < numero) {
        console.log("Muito baixo! Tente novamente.");
    } 
    
    else if (tentativa > numero) {
        console.log("Muito alto! Tente novamente.");
    } else {
        console.log("Parabéns! Você adivinhou o número secreto:", numero);
    }
    break;
}