numero = int(input("Digite um número para verificar se pertence à sequência de Fibonacci: "))

def fibonacci(numero):
    fib = [0, 1]  # Inicia a sequência com os dois primeiros valores: 0 e 1
    while fib[-1] < numero:  # Continua gerando a sequência até que o último valor seja maior que o número fornecido
        fib.append(fib[-1] + fib[-2])  # Adiciona o próximo valor à sequência (soma dos dois últimos valores)
    
    if numero in fib:  # Verifica se o número fornecido está na sequência de Fibonacci
        return f"O número {numero} pertence à sequência de Fibonacci."
    else:
        return f"O número {numero} não pertence à sequência de Fibonacci."

print(fibonacci(numero))


string_original = input("Digite uma string para ser invertida: ")

def inverter_string(string):
    # Inicializa uma string vazia para armazenar a string invertida
    string_invertida = ""

    # Percorre a string de trás para frente e adiciona cada caractere à string invertida
    for i in range(len(string) - 1, -1, -1):
        string_invertida += string[i]

    return string_invertida

# Exemplo de uso:
string_invertida = inverter_string(string_original)
print("String invertida:", string_invertida)