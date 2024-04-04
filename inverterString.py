def inverter_string(string):
    # Inicializa uma string vazia para armazenar a string invertida
    string_invertida = ""

    # Percorre a string de trás para frente e adiciona cada caractere à string invertida
    for i in range(len(string) - 1, -1, -1):
        string_invertida += string[i]

    return string_invertida

string_original = input("Digite um texto ou sequência numérica para ser invertida: ")
string_invertida = inverter_string(string_original)
print("String invertida:", string_invertida)