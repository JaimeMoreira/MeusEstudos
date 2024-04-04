/* Exercício para escrever o nome da pessoa

function escrevaMeuNome(nome) {
    console.log('Meu nome é ' + nome);
}

escrevaMeuNome('Jaime');
*/

/* Exercício verificar a maior idade
    function verificarIdade (idade) {
    if (idade >= 18) {
        console.log ('Você é maior de idade');
    } else {
        console.log ('Você é menor de idade');
    }
}

verificarIdade(23); */

function aplicarDesconto (valor, desconto) {
    return valor - (valor * (desconto/100));

}

function aplicarJuros (valor, juros) {
    return valor + (valor * (juros/100));
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
}else if (formaPagamento === 2){
    console.log (aplicarDesconto(precoEtiqueta, 15));
}else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
}else if (formaPagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10));
}
