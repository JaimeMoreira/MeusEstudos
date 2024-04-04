#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void) {

    int moedas [] = {25, 10, 5, 1};
    // Pergunta ao usuário quanto dinheiro é devido
    float troco;
    int centavos, indice;
    int quantidade = 0;
    do
    {
       troco = get_float("Qual o troco devido? ");
    }
    while (troco <= 0);

    centavos = round(troco*100);

    for (indice = 0; indice < 5; indice++)
    {
        while(centavos - moedas[indice] >= 0 && centavos > 0)
        {
            centavos = centavos - moedas[indice];
            quantidade++;
        }
    }
    printf("%i\n", quantidade);
}

    // Calcula a quantidade mínima de moedas necessárias para dar de troco
//     while (valor_devido > 0) {
//         if (valor_devido >= 0.25) {
//             valor_devido -= 0.25;
//         } else if (valor_devido >= 0.10) {
//             valor_devido -= 0.10;
//         } else if (valor_devido >= 0.05) {
//             valor_devido -= 0.05;
//         } else {
//             valor_devido -= 0.01;
//         }
//         moedas++;
//     }

//     // Mostra a quantidade mínima de moedas necessárias
//     printf("%d\n", moedas);

//     return 0;
// }
