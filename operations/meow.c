#include <stdio.h>

//Protótipo
void meow(void);

int main(void)
{
    for(int i = 0; i < 3; i++)
    {
        meow(3);
    }
}

// Função meow que eu criei
void meow(void)
{
    printf("meow\n");
}

