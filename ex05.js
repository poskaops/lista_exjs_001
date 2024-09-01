/*
Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

const prompt = require('prompt-sync')()

let Quilos = Number(prompt(`Informe seu peso: `))

let Altura = Number(prompt(`Informe sua altura: `))

let imc = Quilos / (Altura * Altura)

if (imc < 18.5) {
    console.log(`Abaixo do peso, seu imc é: ${imc}`)
} else if (imc >= 18.5 && imc < 24.9) {
    console.log(`Peso normal, seu imc é: ${imc}`)
} else if (imc >= 25 && imc < 29.9) {
    console.log(`Sobrepeso, seu imc é: ${imc}`)
} else if (imc >= 30) {
    console.log(`Obesidade, seu imc é: ${imc}`)
}
