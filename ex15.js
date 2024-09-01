/*
Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

const prompt = require("prompt-sync")()

// Inicialização dos primeiros dois números da sequência de Fibonacci
let a = 0
let b = 1

console.log("A sequência de Fibonacci é: ")

for (let i = 0; i < 10; i++) {
  console.log(a)
  let valorTemp = a
  a = b
  b = valorTemp + b
}