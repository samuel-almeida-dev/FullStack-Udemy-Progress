let valor // não inicializado;
console.log(valor);

valor = null; // ausência de valor;
console.log(valor);

// Sempre usar null quando quiser zerar um valor de variável;

const produto = {}

console.log(produto.preco);

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined;
console.log(!!produto.preco);
// delete produto.preco; //Forma correta para tirar um atributo do objeto;
console.log(produto);

produto.preco = null; // sem preço;
console.log(!!produto.preco);
console.log(produto);