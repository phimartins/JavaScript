# JavaScript Bootcamp Launch Base

## itens estudados    

<ul>
    <li>Comentários;</li>
    <li>Tipos de dados;</li>
    <li>Cálculos;</li>
    <li>Condicionais;</li>
    <li>Operadores;</li>
    <li>Objetos;</li>
    <li>Arrays;</li>

   
### Condicionais   
Estrutura de um if:   

```
if (media > 5) {
    // fazer alguma coisa
} else {
    // fazer outra coisa
}
```

### Operadores   
#### Operadores de comparação em JavaScript:   
```
- >   Maior   
- <   Menor   
- >=  Maior ou igual a   
- <=  Menor ou igual a   
- ==  Igual a    
- === Igual e do mesmo tipo   
- !=  Diferente de    
- !== Diferente, inclusive do tipo
```
   
#### Operadores Lógicos:   
```
&& "E" As duas condições devem ser verdadeiras para retornar true   
|| "OU" Uma das condições deve ser verdadeira para retornar true   
! "NÃO" Nega uma condição -- transforma verdadeiro em falso e falso em verdadeiro   
```
### Desafio 1   

#### Objetivo
Criar um programa para calcular o IMC e o nivel de obesidade da pessoa.   
   
Regras:
- `SE` o `IMC` maior ou igual a `30`: o Programa deve exibir uma mensagem informando que a pessoa está acima do peso;
- `SE` o `IMC` menor que `29.9`: o Programa deve exibir uma mensagem informando que a pessoa não está acima do peso.

#### Solução 
A solução está disponível no arquivo `desafio_imc.js`   
      
### Desafio 2   

#### Objetivo
Criar um programa para calcular a aposentadoria de uma pessoa.   
   
Regras:
- `SE` o sexo for masculino `E` o tempo de contribuição for `>= 35` `E` idade + tempo de contribuição `>= 95`: O programa deve exibir uma mensagem informando que a pessoa pode se aposentar;
- `SE` o sexo for feminino `E` o tempo de contribuição for `>= 30` `E` idade + tempo de contribuição `>= 85`: O programa deve exibir uma mensagem informando que a pessoa pode se aposentar;
- Caso as condições acima não sejam atendidas o programa deve exibir uma mensagem informando que a pessoa não pode se aposentar.

#### Solução 
Neste desafio desenvolvi 2 soluções diferentes que estão disponíveis no arquivo `desafio_aposentadoria.js`   
   
### Objetos   
Objetos são coleções de propriedades, que recebem valores ou funcionalidades.
As funcionalidades são chamadas de métodos.   

Estrutura de um objeto:   
```
const aluno01 = {
    nome: "Philip",
    nota: 9.8
}
```

Dentro das `{}` armazenados suas propriedades   

podemos acessar atributos de obejtos como o exemplo a seguir:   
`aluno01.nota`   
desta forma estaríamos acessando a nota do objeto aluno.   
   
### Arrays   
Arrays podem conter uma coleção de objetos.   
   
Estrutura de um array:   
```
const alunos = [
    {
        nome: "Philip",
        nota: 9.8
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
```
podemos acessar os valores de um array usando a indexação, que em JavaScript começa pelo 0.   

Exemplo:   
```const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota)/3```