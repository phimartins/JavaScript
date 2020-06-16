// Objeto é uma coleção de propriedades, que recebem valores ou funcionalidades (metodos)

/*para criar um objeto basta usar a "{}" e no conteúdo podemos adicionar as propriedades
desse objeto */

const aluno01 = {
    nome: "Philip",
    nota: 9.8
}

const aluno02 = {
    nome: "Mariana",
    nota: 10
}

const aluno03 = {
    nome: "Betania",
    nota: 2
}

// para acessar as propriedades de um objeto bastar digitar objeto.propriedade 
// exemplo fazendo a media das notas dos alunos

const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

console.log(media)

