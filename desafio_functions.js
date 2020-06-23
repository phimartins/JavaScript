const usuarios = [
    {
        nome: "Philip",
        genero: "M",
        tecnologias: ["html", "css"]
    },
    {
        nome: "Betania",
        genero: "F",
        tecnologias: ["JavaScript", "css"]
    },
    {
        nome: "Alcione",
        genero: "F",
        tecnologias: ["HTML", "Node.js"]
    }
]

for (let i of usuarios) {
    if (i.genero == "F") {
        console.log(`A ${i.nome} trabalha com as linguagens ${i.tecnologias.join(', ')}`)
    } else {
        console.log(`O ${i.nome} trabalha com as linguagens ${i.tecnologias.join(', ')}`)
    }
}

function check_css(usuario) {
    for (let tecnologia of usuario.tecnologias ) {
        var reg = /css/
        if (reg.test(tecnologia) == true) {
          return true  
        } else {
            return false
        }
    }
}


function checaSeUsuarioUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
    }

    return false
}



const usuarios2 = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
  ];

function calculaSaldo(receitas, despesas) {
    const somaReceitas = somaNumeros(receitas)
    const somaDespesas = somaNumeros(despesas)

    return somaReceitas - somaDespesas
}

function somaNumeros(numeros) {
    let soma = 0

    for (let numero of numeros) {
        soma = soma + numero
    }
    return soma
}

for (let usuario of usuarios2) {
    const saldo = calculaSaldo(usuario2.receitas, usuarios2.despesas)

    if (saldo > 0) {
        console.log(`${usuario2.nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`)
    } else {
        console.log(`${usuario2.nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`)
    }
}



