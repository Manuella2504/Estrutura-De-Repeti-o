# 📘 Estudo sobre Laços de Repetição em JavaScript

Este repositório contém um estudo realizado por **Manuella** sobre os **laços de repetição em JavaScript**. O objetivo é entender o funcionamento dessas estruturas e aplicá-las na resolução de problemas comuns na programação.

---


```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
````
---

```
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```
---

```
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
```
---

```

const pessoa = { nome: "Ana", idade: 25 };
for (let chave in pessoa) {
  console.log(`${chave}: ${pessoa[chave]}`);
}
```
---

```

const numeros = [10, 20, 30];
for (let numero of numeros) {
  console.log(numero);
}
```
---

```

📂 estudo-lacos-repeticao
├── for.js
├── while.js
├── do-while.js
├── for-in.js
├── for-of.js
└── exemplos-praticos.js
