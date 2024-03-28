const escola = "Cod3r";

console.log(escola.charAt(4)); // charArt retorna a letra da posição do index;
console.log(escola.charCodeAt(3)); // charCodeAt retorna o valor da string de acordo com a tabela ASCII em HTML;
console.log(escola.indexOf(3)); // indexOf mostra o indice de um elemento,

console.log(escola.substring(1)); // substring retorna uma string a partir do index em diante;
console.log(escola.substring(0, 3)); // substring dessa forma retorna uma string a partir do index em diante até o index indicado;

console.log('Escola '.concat(escola).concat("!"));; // concat une strings;
console.log(escola.replace(3, 'e')); // replace substitui uma string por outra;

console.log("Maria, Ana, Lucas, Pedro".split(",")); // split transforma uma string em array separado por virgula;
