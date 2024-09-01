/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
Professor, o que eu bati cabeça tendo ideia de como otimizar esse código no metrô, me lembrou quando eu era pequeno e comecei a estudar python, saudades.
*/

const prompt = require("prompt-sync")()

let soma = 0
let quantidade = 0
let numero

while ((numero = parseFloat(prompt("Digite um numero decimal (ou 0 para encerrar): "))) !== 0) {
  soma += numero
  quantidade++
}

console.log(quantidade > 0 ? `A media aritmetica dos numeros é: ${soma / quantidade}` : "Nenhum numero valido foi inserido.")