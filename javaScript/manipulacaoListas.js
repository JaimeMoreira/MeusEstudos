const lista = [1, 5, 7, 9, 10, 14, 20, 22]

//metódo forEach
lista.forEach((value, i, listaRef) => {
    console.log(value, i, listaRef)
})

//método filter
const listaNumerosPares = lista.filter((element) => {
    return ( element %2 === 0)
})

console.log(listaNumerosPares);

//método map

class Pessoa {
    constructor(nome) {
        this.name = nome
    }
}

const lista2 = [new Pessoa('Jaime'), new Pessoa('André'), new Pessoa('Ana'), new Pessoa('Isis')]

const listaNomes = lista2.map((element) =>{
    return element.name
})

console.log(listaNomes);

//método reduce

const lista3 = [1, 5, 7, 9, 10, 14, 20, 22]

const somaTodosNumeros = lista3.reduce((previous, current) => {
    console.log(previous, current)
    return previous + current

})

console.log(somaTodosNumeros);

//método Join

const list4 = [1, 2, 3, 4]

console.log(list4.join(';'));

//outro exemplo

const list5 = [{nome: 'Jaime'}, {nome: 'Renato'}, {nome: 'Sara'}]

console.log(list5.map((e) => e.nome).join('; '));


