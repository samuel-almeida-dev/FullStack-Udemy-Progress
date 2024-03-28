const nome = "Lucas";
const concatenacao = "Olá " + nome + ".";

console.log(concatenacao);

const templateString = `Olá ${nome}.`
console.log(templateString);

// Expressões...

console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`);