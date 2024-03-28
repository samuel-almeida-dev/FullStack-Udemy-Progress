const peso1 = 1.1;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); // isInteger: retorna true se o número for inteiro;

const avaliacao1 = 9.324;
const avaliacao2 = 6.321;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString()); // toString: transforma o número em string;
console.log(typeof media);
console.log(typeof Number); // Number é uma function;