/* Crie uma calculadora que converta a idade de um cachorro para "anos de cachorro". 
A regra geral é que 1 ano humano equivale a 7 anos de cachorro. */

const conversorIdadeCachorro = (anoHumano) => {
    return console.log(`${anoHumano} anos humanos é equivalente a ${(anoHumano * 7)} para o cachorro.`);
}

conversorIdadeCachorro(10); // 70 anos de cachorro.