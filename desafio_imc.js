/* ====================================================================

Objetivo:
Criar um programa para calcular o IMC e o nivel de obesidade da pessoa

==================================================================== */

// criando as variaveis

const nome = 'Philip'
const peso = 97
const altura = 1.71

const imc = peso / (altura * altura)

if(imc <= 29.9) {
    console.log(`${nome} você não está acima do peso`)
} else {
    console.log(`${nome} você está acima do peso`)
}

