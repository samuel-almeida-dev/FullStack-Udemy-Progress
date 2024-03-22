/*
    Lembrando, essas são palavras reservadas(var, let, const):
        - var: Declara uma variável global ou localiza na função onde foi declarada.
        - let: Declara uma variável local. Não tem escopo global nem funcional.

        Observações de variáveis:
        - Não podemos redeclarar uma variável com o mesmo nome que já existe;
        
*/

{
    let preco = 30;
    let desconto = 0.4; // 40% de desconto;
    
    // O preço do produto com desconto é R$ 18.00;
    preco = preco - (preco * desconto);
    console.log("O preço do produto é R$ " + preco.toFixed(2));
    
    
    let produto = "Caderno"; // String é uma sequência de letras ou símbolos;
    let categoria = "Papelaria";
    console.log(`O produto ${produto} está na categoria ${categoria}`);
    
    // Concatenação é juntar dados strings em um só texto;
    let nome = "Lucas";
    let sobrenome = "Almeida";
    let nomeCompleto = nome + " " + sobrenome;
    console.log(`Cliente: ${nomeCompleto}`);
}

