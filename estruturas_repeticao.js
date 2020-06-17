// construindo um vetor com varios objetos "alunos" para turma A e turma B

const turmaA = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 0
    },
    {
        nome: "Mais um aluno",
        nota: 10
    }
]

const turmaB = [
    {
        nome: "Philip",
        nota: 1.8
    },
    {
        nome: "Mariana",
        nota: 10
    },
    {
        nome: "Betania",
        nota: 2
    },
    {
        nome: "Novoaluno",
        nota: 5
    }
]


// criando função que retorna a média dos alunos

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    } // diferente de const, let permite o valor de uma variável mudar

    const media = soma / alunos.length
    return media
}

//gravando o resultado da funcao dentro de variaveis

const mediaA = calculaMedia(turmaA)
const mediaB = calculaMedia(turmaB)

//funcao que envia a mensagem com dados de media

function enviaMensagem(media, turma) {
    if (media > 5) {
        console.log(`A média da ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da ${turma} é menor que 5.`)
    }
}


enviaMensagem(mediaA, 'turmaA')
enviaMensagem(mediaB, 'turmaB')