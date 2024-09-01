/*
Implemente um programa que recebe uma nota de 0 a 10 e classifica como
"Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
*/

const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite a sua nota:"))

if (nota >= 7 && nota <= 10) {
    console.log("PARÁBENS!!! Aprovado")
} else if (nota >= 4 && nota < 7) {
    console.log("Você está em recuperação")
} else if (nota >= 0 && nota <= 3) {
    console.log("Que pena, você está reprovado")
} else {
    console.log("Nota inválida")
}