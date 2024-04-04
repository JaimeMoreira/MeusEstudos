
/*exercício de tabuada
const numero = 8;

for (let i = 1; i <= 10; i++) {
    console.log(i*numero);
}; */

/*exercicio de verificar e informar os números par de uma lista 

const numero = [0, 2, 5, 8, 9, 20, 74, 80];

for (let i = 0; i < numero.length; i++) {
    const numeroPar = numero[i];
    if (numeroPar % 2 === 0) {
        console.log(numeroPar);
    }   
}
*/

const numerosPares = [];

for (let i = 0; i < 10; i++) {
    const numeroPar = i % 2 === 0;
    if (numeroPar) {
        numerosPares.push(i);
    }
}

console.log(numerosPares);