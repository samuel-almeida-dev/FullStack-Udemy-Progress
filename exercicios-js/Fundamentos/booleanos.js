let isAtivo = false; // Atribuindo false;
console.log(isAtivo);

isAtivo = true; // Atribuindo true;
console.log(isAtivo);

// '!!' mantém o valor para padrão;
// '!' inverte o valor;

console.log(`Os verdadeiros...`);
console.log(!!3); // Números inteiros;
console.log(!!-1); // Números inteiros negativos;
console.log(!!' '); // String com espaço;
console.log(!![1,2,3]); // Arrays;
console.log(!!{}); // Objetos;
console.log(!!Infinity);
console.log(!!(isAtivo = true)); // Caso seja atribuido como verdadeiro;

console.log(`Os falsos...`);
console.log(!!0); // Número 0;
console.log(!!""); // String com vazia;
console.log(!!null);
console.log(!!NaN); // NaN - Not a Number (Não é um número);
console.log(!!undefined);
console.log(!!(isAtivo = false)); // Caso seja atribuido como falso;

let nome = ``;
console.log(nome || `Desconhecido`);
// Utilizando o || (OR), o que me retorna o valor verdadeiro;
// Ou seja, já que a variável nome está vazia, é falsa, retornando então a string `Deseconhecido`.
// Porém, se eu tiver algo dentro da string da variável nome, logo, esse valor é verdadeiro e será retornado, já que vem primeiro.

