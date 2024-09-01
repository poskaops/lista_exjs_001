/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
*/

const prompt = require(`prompt-sync`)();

let n1 = Number(prompt(`Digite um valor: `));
for (let a = 10; a >= 1; a--) {
    console.log(n1);
  }