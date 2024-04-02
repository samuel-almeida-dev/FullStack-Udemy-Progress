/* Faça um programa que calcule o valor final de um produto após aplicar um desconto percentual. 
O usuário deve inserir o preço original do produto e o percentual de desconto. */

const calculadoraDeDesconto = (precoOriginal, percentualDesconto) => {
    desconto = precoOriginal * percentualDesconto
    return console.log(`O preço de seu item é de: ${(precoOriginal - desconto).toFixed(2)}R$.`);
}

let preco = 100;
let desconto = 0.1; // 10%

calculadoraDeDesconto(preco, desconto);