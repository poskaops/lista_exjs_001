/*
Crie um programa que calcula o fatorial de um número fornecido pelo usuário
utilizando um loop for ou while.

Eu jurava que na lógica, esse algoritmo era mais simples.
*/

const prompt = require("prompt-sync")()

let numero = parseInt(prompt("Digite um número para calcular o fatorial: "), 10)

if (numero < 0) {
  console.log("Esse número não é compatível com fatorização. Favor tentar novamente.")
} else {
  let fatorial = 1
  let i = 1
  while (i <= numero) {
    fatorial *= i
    i++
  }
  console.log(`O fatorial de ${numero} é ${fatorial}.`)
}
