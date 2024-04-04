#include <cs50.h>
#include <stdio.h>

int main(void)
{
    //solicita o primeiro número
    int x = get_int("x: ");

    //solicita o segundo número
    int y = get_int("y: ");

    //compara os dois números
    if (x < y)
    {
        printf("X é menor que y\n");
    }
    else if (x > y)
    {
        printf("X é maior que y\n");
    }
    else
    {
        printf("X é igual a Y\n");
    }
}
