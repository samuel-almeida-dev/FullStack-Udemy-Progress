/*
    O desafio consiste em trocar os valores das variáveis "a" e "b";
*/

{
    let a = 7;
    let b = 94;
    console.log(`a = ${a}, b = ${b}`);

    let temp = a; // temp recebe o valor de a;
    a = b; // a vira valor de b;
    b = temp; // b recebe o valor de temp, ou seja, o valor original de a;
    console.log(`a = ${a}, b = ${b}`);
}

/*
    Desenvolva um script em JavaScript que inverta uma string. 
    O script deve aceitar uma string como entrada e retornar a string invertida. 
    Por exemplo, se a entrada for “JavaScript”, a saída deve ser “tpircSavaJ”. Boa sorte!
*/

{
    let entrada = "JavaScript";
    let juntar = entrada.split("").reverse().join("");
    console.log(juntar);
}