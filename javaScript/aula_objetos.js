
/* como declarar um objeto 
const jaime = {
    nome: 'Jaime Moreira',
    idade: 28,
    cidadeNascimento: 'Salvador'
} */

/* Como invocar o objeto 
console.log(jaime.nome);
console.log(jaime.idade);
console.log(jaime); 
console.log(jaime['idade']); */

/* incrementar um objeto

jaime.altura = 1.69;
console.log(jaime); */

/* criando metodos */

const jaime = {
    nome: 'Jaime Moreira',
    idade: 28,
    cidadeNascimento: 'Salvador',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

jaime.descrever();