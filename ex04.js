/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

const prompt = require('prompt-sync')()

console.log("Escolha uma das opções:")
console.log("1. Primeira Opção")
console.log("2. Segunda Opção")
console.log("3. Terceira Opção")

let escolha = prompt("Digite o número da sua escolha: ")

switch (escolha) {
    case '1':
        console.log("Essa é a primeira opção!")
        break
    case '2':
        console.log("Essa é a segunda opção!")
        break
    case '3':
        console.log("Essa é a terceira opção!")
        break
    default:
        console.log("Essa opção não existe!")
        break
}