/*
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. 
Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260 */

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
        rua: "Rua Guilherme Gembala",
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Vetores e objetos

const programador = {
    nome: "Philip",
    idade: 27,
    tecnologias: [
        {nome: "Python", especialidade: "analise de dados"},
        {nome: "SQL", especialidade: "banco de dados"},
        {nome: "JavaScript", especialidade: "Web/Mobile"}
    ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`)