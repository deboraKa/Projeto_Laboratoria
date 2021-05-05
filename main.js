// Mensagem de boas vindas:
alert("Alô, bem vind@ ao Show do Butão")

// Através de prompt, peça o nome do usuário 
var name = prompt("Qual o seu nome?")

// Escolha se quer mesmo dar início a prova ou não
var start = prompt("Deseja iniciar o Quiz(1 para Sim e 2 para Não)? \n 1. Sim \n 2. Não")

// Caso ele não deseje iniciar, o fluxo deve ser encerrado.  

if (start == 1) {
var question1 = prompt("Qual a capital do Butão? (digite o nº) \n 1. Thimpu \n 2. Damasco  \n 3. Taipé")
var question2 = prompt("Qual das seguintes curiosidades é a falsa? (digite o nº)  \n 1. Poligamia é permitida \n 2. Maconha é dada para os porcos ficarem laricados e comerem um monte \n 3. o sapo é um animal sagrado")
var question3 = prompt("O Butão fica localizado em que continente? (digite o nº)  \n 1. Europa \n 2. Ásia \n. 3. África")
} else {
alert ("Que pena ):")
}


//Mostrar uma tela de resultados (respostas corretas e incorretas).
var answer1 = "1"
var answer2 = "3"
var answer3 = "2"

if (question1===answer1)  {
console.log("correto")
} else {
console.log("errado")
}

