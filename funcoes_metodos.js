// construindo um vetor com varios objetos "alunos" para turma A e turma B

const turmaA = [
    {
        nome: "Cleiton",
        nota: 10
    },
    {
        nome: "Robson",
        nota: 0
    },
    {
        nome: "Siclano",
        nota: 0
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
    }
]


// criando função que retorna a média dos alunos

function calculaMedia(alunos) {
    return (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3 
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


// enviaMensagem(mediaA, 'turmaA')
// enviaMensagem(mediaB, 'turmaB')


// marcar aluno como reprovado se a nota for menor que 5
// e também enviar uma mensagem

function marcarComoReprovado(aluno) {
        aluno.reprovado = false;
        if (aluno.nota < 5) {
            aluno.reprovado = true;
    }
}

// marcarComoReprovado(turmaA)

function enviarMensagemReprovado(aluno) {
    if(aluno.reprovado) {
        console.log(`O Aluno ${aluno.nome} está reprovado`)
    }
}


function AlunoReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

AlunoReprovado(turmaA)
AlunoReprovado(turmaB)