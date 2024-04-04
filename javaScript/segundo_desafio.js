const etanol = 4.82;
const gasolina = 5.75;
const kmPorLitrosGasolina = 12;
const kmPorLitrosAlcool = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Etanol';

const litrosConsumidosGasolina = distanciaEmKm / kmPorLitrosGasolina;
const litrosConsumidosAlcool = distanciaEmKm / kmPorLitrosAlcool;

if (tipoCombustivel === 'Gasolina') {
    const valorGasto = kmPorLitrosAlcool * etanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = kmPorLitrosGasolina * gasolina;
    console.log(valorGasto.toFixed(2));
}