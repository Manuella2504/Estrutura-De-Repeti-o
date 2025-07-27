📘 Estudo sobre Laços de Repetição em JavaScript
Este repositório contém um estudo prático e teórico sobre os laços de repetição (loops) em JavaScript. O objetivo é compreender o funcionamento e as aplicações dos principais tipos de laços, além de praticar resoluções de problemas utilizando essas estruturas.

🧠 Conceitos Abordados
➤ for
Usado quando sabemos exatamente quantas vezes queremos repetir um bloco de código.

js
Copiar
Editar
for (let i = 0; i < 5; i++) {
  console.log(i);
}
➤ while
Executa um bloco de código enquanto a condição for verdadeira.

js
Copiar
Editar
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
➤ do...while
Garante que o bloco seja executado pelo menos uma vez, mesmo que a condição seja falsa.

js
Copiar
Editar
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
➤ for...in e for...of
Usados para iterar sobre objetos (for...in) ou sobre elementos iteráveis como arrays (for...of).

js
Copiar
Editar
// for...in
const pessoa = { nome: 'Ana', idade: 25 };
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}

// for...of
const numeros = [10, 20, 30];
for (let numero of numeros) {
  console.log(numero);
}
🧪 Estrutura dos Arquivos
cpp
Copiar
Editar
📁 estudo-lacos-repeticao
│
├── for.js
├── while.js
├── do-while.js
├── for-in.js
├── for-of.js
└── exemplos-praticos.js
Cada arquivo contém exemplos comentados e exercícios resolvidos com os respectivos laços.

🧩 Exemplos de Aplicações
Impressão de sequências numéricas

Iteração sobre listas de produtos

Simulações de entrada de dados

Validações e repetições condicionais

🚀 Como Executar
Você pode executar os arquivos com Node.js. Exemplo:

bash
Copiar
Editar
node for.js
📝 Autor
Este estudo foi realizado por Manuella como parte de aprendizado em JavaScript.
