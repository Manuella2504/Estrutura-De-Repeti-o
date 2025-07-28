/*Crie um objeto com informações de um produto (nome, preço, quantidade) e use for...in para imprimir todas as suas propriedades. */

const produto = {
    Nome : "Escova de cabelo",
    preco: 15.00,
    quantidade: 3
};

// O objeto ``e algo criado que armazena valores e chaves, funciona como uma caixa de informações cadastradas.

for (const especificacoes in produto){
    //esse for..in é algo que vai passar por todas as informações dentro do objeto, para a sua transcrição.
    console.log(`${especificacoes}: ${produto[especificacoes]}`);
// É o mesmo que colocar ("Especificações" + especificacoes, "Produto" + produto);

};


//propriedade está entre colchetes, pois ele muda  acada volta que dá, já que passa por todos os objetos.
//Produto também está fora para que se procure as informações, e não a palavra "propriedade" literalmente.

/*
É como se você tivesse isso:

javascript
Copiar
Editar
console.log("nome: Camiseta");
console.log("preco: 29.99");
console.log("quantidade: 3");


A crase é usada para criar templates strings
podendo misturar textos com variáveis de uma forma mais fácil e bonita ksk, a variável seria produto, enquanto as especificações será os que serao usados diante do produto.
O dólar + chaves ${} serve para colocar uma variável ou expressão dentro da string.
*/
