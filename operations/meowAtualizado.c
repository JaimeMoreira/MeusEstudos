#include <stdio.h>

//Protótipo
void meow(int n);

int main(void)
{
    meow(2);
}

// Função meow mais robusta
void meow(int n)
{
    //Agora será impresso o meow quantas vezes o usuário digitar na própria função na linha 9
    for(int i = 0; i < n; i++)
    {
        printf("meow\n");
    }
}
