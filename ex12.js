/*
Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
10) utilizando um loop for.
*/

const prompt = require("prompt-sync")()

let n1 = Number(prompt("Digite um número para ver a tabuada: "))

console.log(`Tabuada do ${n1}:`)
for (let a = 1; a <= 10; a++) {
  console.log(`${n1} x ${a} = ${n1 * a}`)
}