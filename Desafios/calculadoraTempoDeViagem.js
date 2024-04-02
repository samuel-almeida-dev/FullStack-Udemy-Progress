/* Faça um programa que calcule o tempo necessário para uma viagem com base na distância (em km), 
na velocidade média (em km/h) e no meio de transporte escolhido (ex: carro, bicicleta, avião).*/

const tempoDeViagem = (velocidade, distancia, meioDeTransporte) => {
    let tempo = distancia / velocidade;
    return console.log(`O tempo de viagem no(a) ${meioDeTransporte} é de ${tempo} horas.`);
}

let meioDeTransporte = "carro"
let velocidade = 45;
let distancia = 225; 
tempoDeViagem(velocidade, distancia, meioDeTransporte);