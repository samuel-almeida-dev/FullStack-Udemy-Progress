//  Tipos de dados: Três tipos básicos, numbers, boolean e strings;
//  typeof retorna o tipo da variável, se for um número é number, string é string e assim por diante;

{ 
    let idade = 26;
    let salario = 4201.21;
    console.log(typeof idade); // retorna 'number'
    console.log(typeof salario); // retorna 'number'
    // Não há diferenciação entre números inteiros ou com ponto flutuante, tudo é number;
}

{
    let estaChovendo = false;
    console.log(typeof estaChovendo); // retorna 'boolean'
    // Boolean retorna false ou true;
}

{
    let nome = "Lucas";
    console.log(typeof nome); // retorna 'string';
}
