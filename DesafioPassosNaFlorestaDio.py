quantidade_passos = int(input('Digite a quantidade de passos para atravessar a floresta: '))

# Todo: Adicione uma condição para verificar se a quantidade de passos é positiva.
# Se a quantidade de passos for zero, imprima "Nenhum passo dado na floresta."
# Caso contrário, utilize um loop for para imprimir a mensagem do explorador, indicando o número do passo.


if quantidade_passos < 0:
    print("A quantidade de passos deve ser um número positivo.")
elif quantidade_passos == 0:
    print("Nenhum passo dado na floresta.")
else:
    for i in range(1, quantidade_passos + 1):
        if i == 1:
            print(f"Explorador: {i} passo")
        else:
            print(f"Explorador: {i} passos")