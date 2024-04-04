/* Venda de um produto */
/* debito - 1, dinheiro ou pix -2, duas vezes - 3, acima de duas vezes, 4 */

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    const debitoDesconto = precoEtiqueta - (precoEtiqueta*0.1);
    console.log(debitoDesconto);
}else if (formaPagamento === 2){
    const avistaDesconto = precoEtiqueta - (precoEtiqueta*0.15);
    console.log(avistaDesconto);
}else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
}else if (formaPagamento === 4) {
    const parcelaJuros = precoEtiqueta + (precoEtiqueta*0.1);
    console.log(parcelaJuros);
}
