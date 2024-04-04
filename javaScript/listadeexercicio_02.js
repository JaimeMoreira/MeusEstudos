/* Calculadora de IMC */

const peso = 120;
const altura = 1.69;

const imc = peso/Math.pow(altura,2); /* o mesmo que usar altura * altura*/
console.log(imc);

if (imc < 18.5) {
    console.log("Você está abaixo do peso.");
}else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal.');
}else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso.');
}else if (imc >= 30 && imc < 40){
    console.log('Obeso.')
}else {
    console.log('Obesidade Grave!')
}