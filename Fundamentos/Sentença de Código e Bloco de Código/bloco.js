/* 
    Um bloco é definido por um par de chaves;
    
    {
        // Aqui é um bloco de código;
    }

    {
        // Um bloco de código pode conter outro bloco dentro dele;  
        {
            // Aqui é um bloco de código;
        }
    }
*/

{
    {
        console.log("Passo 01");
        console.log("Passo 02");
        console.log("Passo 03");
    }
}


// Pode gerar um bloco de código com sentenças vazias, porém, não há sentido nisso;

{
    ;
    ;
    ;
}
