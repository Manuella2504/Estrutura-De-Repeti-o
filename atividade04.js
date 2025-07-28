/*Crie um objeto com informações de um produto (nome, preço, quantidade) e use for...in para imprimir todas as suas propriedades. */

const produto = {
    Nome : "Escova de cabelo",
    preco: 15.00,
    quantidade: 3
};

// O objeto ``e algo criado que armazena valores e chaves, funciona como uma caixa de informações cadastradas.

for (const especificacoes in produto){
    console.log(`${propriedade}: ${produto[propriedade]}`);
}
