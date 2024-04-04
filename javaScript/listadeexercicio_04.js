
class Carro {
    marca;
    cor;
    consumoPorKm;

    constructor(marca, cor, consumoPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.consumoPorKm = consumoPorKm
    }

    calcularGasto (distanciaEmKm, precoCombustivel) {
        return (distanciaEmKm * this.consumoPorKm) * precoCombustivel
    }
}

const uno = new Carro ('Fiat', 'Preto', 1/13);
const palio = new Carro ('Fiat', 'Prata', 1/11);
console.log(uno.calcularGasto(70, 5));