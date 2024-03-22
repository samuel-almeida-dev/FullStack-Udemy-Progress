/*
    A ideia de variável é que armazenamos os valores em um local da memória, 
    e podemos usar esses dados para outras operações.
*/

var produto = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;

console.log("Produto: Caneta");
console.log(`Quantidade: ${quantidade}`);
console.log(`Preço: ${preco}`);
console.log(`Imposto: ${imposto}`);
console.log(`Preço final: ${preco+imposto}`);

// Pode alterar das variáveis;
produto = "Caneta Bic";
console.log(`Produto: ${produto}`);

// Atenção, JavaScript é Case Sensitive. Isso quer dizer que a letra maiúscula e minúscula são diferentes.

/*
    - var: Declara uma variável global ou localiza na função onde foi declarada.
    - let: Declara uma variável local. Não tem escopo global nem funcional.
*/
