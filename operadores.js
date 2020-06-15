// Desafio 1
// Verificar se a pessoa é maior de idade e deixar entrar caso sim, caso não bloquear

const idade = 16

if(idade > 18) {
    console.log('Entrada permitida')
} else {
    console.log('Entrada bloqueada')
}

// Se a pessoa tiver 17 anos
// Avisar para voltar quando tiver 18 anos

if (idade === 17) {
    console.log('Volte quando tiver 18 anos')
}


const idade2 = 17

if(!(idade2 >= 18) || idade2 === 17) {
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}