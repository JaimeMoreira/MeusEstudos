/* Algoritmo de média escolar */

const nota1 = 7;
const nota2 = 9;
const nota3 = 5;
const media = (nota1 + nota2 + nota3)/3;
console.log(media.toFixed(2));

if (media <5) {
    console.log('Sua média é: ',media.toFixed(2),', você está reprovado.');
}else if (media >= 5 && media < 7) {
    console.log('Sua média é:',media.toFixed(2),', você está na recuperação.');
}else {
console.log('sua média é: ',media.toFixed(2),', você passou de semetre!');
}