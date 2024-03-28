/*
    Palavra reservada: var / let;
    Identificador: a;
    Valor: 3;
*/

var a = 3;
let b = 4; // Palavra reservada let, identificador: b, valor: 4.

var a = 30;
b = 40; // Palavra reservada let não pode ser usada para alterar a variável.

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// c = 500; Constante não pode ter seu valor alterado;

console.log(c);