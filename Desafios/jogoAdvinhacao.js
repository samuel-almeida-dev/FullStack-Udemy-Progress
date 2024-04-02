/* Elabore um jogo simples onde o programa escolhe um número aleatório entre 1 e 10, e o usuário tenta adivinhar qual é esse número. */

const randomNumber = (x) => {
    let y = Math.floor(Math.random() * 10) + 1;
    if (y === x) {
        return console.log(`Parabéns, você acertou o número!`);
    } else if (y !== x) {
        return console.log(`Você errou! O número era ${y}`);
    };
}

let sortNumber = 10;

randomNumber(sortNumber);
