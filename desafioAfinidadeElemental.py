import sys
def prever_afinidade_elemental(intensidade, componente_raro, fase_lunar, idade_feiticeiro, afinidade_animais):
    # Convertendo a resposta do componente raro e afinidade com animais para booleanos
    componente_raro = componente_raro.lower() == "sim"
    afinidade_animais = afinidade_animais.lower() == "sim"
    
    # Desenvolva a Lógica de decisão para prever a afinidade elemental
    if intensidade >= 5 and componente_raro == "sim" and fase_lunar == "crescente" and idade_feiticeiro > 100 and afinidade_animais == "sim":
        return "A afinidade elemental do feiticeiro é com o elemento Fogo!"
    elif intensidade >= 7 and componente_raro == "sim" and fase_lunar == "cheia" and idade_feiticeiro <= 100 and afinidade_animais == "não":
        return "A afinidade elemental do feiticeiro é com o elemento Água!"
    elif intensidade >= 7 and componente_raro == "sim" and fase_lunar == "cheia" and idade_feiticeiro <= 100 and afinidade_animais == "sim":
        return "A afinidade elemental do feiticeiro é com o elemento Terra!"
    else:
        return "A afinidade elemental do feiticeiro é com o elemento Ar!"
   

# Entrada do usuário
intensidade_feitico = int(sys.stdin.readline())
componente_raro_feitico = sys.stdin.readline()
fase_lunar_feitico = sys.stdin.readline()
idade_feiticeiro = int(sys.stdin.readline())
afinidade_animais_feiticeiro = sys.stdin.readline()

# Fazendo a previsão
resultado = prever_afinidade_elemental(intensidade_feitico, componente_raro_feitico, fase_lunar_feitico, idade_feiticeiro, afinidade_animais_feiticeiro)

# Saída da previsão
print(resultado)