// Vetores podem ter uma coleção de objetos

const alunos = [
    {//posicao 0
        nome: "Philip",
        nota: 9.8
    },
    {//posicao 1
        nome: "Mariana",
        nota: 10
    },
    {//posicao 2
        nome: "Betania",
        nota: 2
    }
]

// para acessar valores dentro de um array podemos digitar nomearray[posicao].propriedade
//exemplo:

const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3


console.log(`O aluno ${alunos[1].nome} tirou ${alunos[1].nota} na prova e a média da turma foi ${media}`)

