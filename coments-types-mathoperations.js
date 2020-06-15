// const cria uma variável que não pode ser alterada ao longo do programa

const nome = 'Philip' // Strings podem ser criadas com aspas simples ou duplas '' ou ""
const nome2 = "Diego"
const nome3 = `Valeska ${nome}` // com acento criamos uma template string que permite chamar uma outra varivavel dentro da mesma

// cosonsole.log() executa diversas instruções para mostrar mensagem no terminal

console.log(nome3) 

// para executar o script é só navegar até o diretório do arquivo .js e chamar o node arquivo.js

const aluno01 = 'Philip'
const notaAluno01 = 9.8

const aluno02 = 'Diego'
const notaAluno02 = 10

const aluno03 = 'Fulano'
const notaAluno03 = 2

console.log(typeof notaAluno01) // typeoff mostra o tipo de dado de um objeto .. string, number, float etc ..

const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3 

console.log(media)
