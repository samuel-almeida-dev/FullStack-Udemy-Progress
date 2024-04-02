const prod1 = {

} // Par de chaves representa um objeto.
// É uma coleção de chave e valor.

prod1.nome = `Celular Ultra`
prod1.preco = 4999.90
prod1[`Desconto`] = 0.30 // Evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: `Camisa Polo`,
    preco: 79.90,
    obj: { // Pode ter uma estrutura aninhada.
        cor: `branco`,
        tamanho: 'm',
        marca: `Nike`
    }
}

console.log(prod2)

// JSON é diferente de Objeto...