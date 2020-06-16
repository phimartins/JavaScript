/* ====================================================================

Objetivo:
Criar um programa para calcular a aposentadoria de uma pessoa

Regras para aposentadoria:
contribuicao minima para homens 35 anos e, para mulheres 30 anos
idade + tempo de contribuicao do homem precisa ser no minimo 95 anos
idade + tempo de contrubuicao da mulher precisa ser no minimo 85 anos

==================================================================== */

// criando as variaveis

const nome = "Philip"
const sexo = "M"
const idade = 27
const contribuicao = 9
const calc_contribuicao = idade + contribuicao

// Solucao 1

if(sexo == 'M' && idade >= 35 && calc_contribuicao >= 95) {
    console.log(`${nome}, você já pode se aposentar`)
} else if(sexo == 'F' && idade >= 30 && calc_contribuicao >= 85) {
    console.log(`${nome}, você já pode se aposentar`)
} else {
    console.log(`${nome}, você não pode se aposentar`)
}

// Solucao 2

// Criando variaveis booleanas (retornam true ou false)

const m_aposentar = sexo == 'M' && idade >= 35 && calc_contribuicao >=95
const f_aposentar = sexo == 'F' && idade >= 30 && calc_contribuicao >= 85

if(m_aposentar || f_aposentar) {
    console.log(`${nome}, você já pode se aposentar`)
} else {
    console.log(`${nome}, você não pode se aposentar`)
}