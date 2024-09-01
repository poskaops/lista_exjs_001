/*
Crie um programa que classifica a anos de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

const prompt = require('prompt-sync')()

let anos = Number(prompt("Digite a sua idade:"))

if (anos >= 0 && anos <= 12) {
    console.log("Criança")
} else if (anos >= 13 && anos <= 18) {
    console.log("Adolescente")
} else if (anos >= 19 && anos <= 64) {
    console.log("Adulto")
} else if (anos >= 65) {
    console.log("Idoso")
} else {
    console.log("Valor inválido")
}
