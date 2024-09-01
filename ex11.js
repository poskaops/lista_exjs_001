/*
Escreva um programa que solicita ao usuário 5 números e calcula a soma total
utilizando um loop for.
*/

const prompt = require('prompt-sync')()

let soma = 0
for (let i = 0; i < 5; i++) {
    let n1 = Number(prompt(`Digite um número: `))
    soma += n1
}

console.log(`A soma dos valores é: ${soma}`)