#include <cs50.h>
#include <stdio.h>

int main()
{
    int tamanho;

    // Pedir ao usuário para inserir um número entre 1 e 8
    do {
      tamanho = get_int("Digite um número entre 1 e 8: ");
      }
      while (tamanho < 1 || tamanho > 8);

for (int i = 1; i <= tamanho; i++)
    {
        // Loop para imprimir os espaços em branco
        for (int j = 0; j < tamanho - i; j++) {
            printf(" ");
        }
        // Loop para imprimir os hashes (#)
        for (int k = 0; k < i; k++) {
            printf("#");
        }
        printf(" ");
        // Loop para imprimir os hashes (#) do lado direito
        for (int k = 0; k < i; k++) {
            printf("#");
        }
        printf("\n");
    }
    return tamanho;
}
