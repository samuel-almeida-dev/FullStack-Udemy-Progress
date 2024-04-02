const valores = [1.2 , 2.3, 3.9, 4.1];
console.log(valores [0], valores [3]);

console.log("Quantidade de elementos no array: " + valores.length);

valores.push({id: 3}, false, null, `teste`);
console.log(valores);

console.log(valores.pop()); // retira do array o último elemento;
delete valores [0]; // retira do array o elemento na posição indicada;
console.log(valores);

console.log(typeof valores); // Array é um objeto;


