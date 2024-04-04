/* const numero = 10;

const numeroPar = (numero % 2) === 0;

console.log(numeroPar);

if (numeroPar) {
    console.log('Executei');
} */

const numero = 55;

const divisivelPor5 = (numero % 5) === 0;
console.log(divisivelPor5);

if (numero === 0) {
    console.log('O número é zero');
} else if (divisivelPor5){
    console.log('O número é divisível por 5');
} else {
    console.log('O número não é divisível por 5');
}