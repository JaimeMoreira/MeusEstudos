//const pessoa = {
//    idade: 18
//}

//const renan = {
//    nome: 'Renan',
//    __proto__: pessoa
//}

//console.log(renan.idade);

function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`Meu nome é: ${this.nome}, tenho ${this.idade} anos.`)
}

const renan = new Pessoa('Renan', 28)
renan.falar()