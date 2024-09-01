/*
As Maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de Maçãs
compradas, calcule e escreva o valor total da compra.
*/

const prompt = require(`prompt-sync`)()

let quantidade = parseInt(prompt(`Digite o número de maçãs compradas: `))
let valorTotal = quantidade * (quantidade < 12 ? 0.3 : 0.25)

console.log(`O valor total da compra é: R$ ${valorTotal}`)