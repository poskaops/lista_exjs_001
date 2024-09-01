/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
*/

const prompt = require(`prompt-sync`)();

let n1 = Number(prompt(`Digite o primeiro valor: `));
let n2 = Number(prompt(`Digite o segundo valor: `));

if (n1 < n2) {
  console.log(`Valores em ordem crescente: ${n1}, ${n2}`);
} else {
  console.log(`Ordem crescente: ${n2}, ${n1}`);
}