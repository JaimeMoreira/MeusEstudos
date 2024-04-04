const precoCombustivel = 5.85;
const kmPorLitros = 12;
const distanciaEmKm = 200;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));
