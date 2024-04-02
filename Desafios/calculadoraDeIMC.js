const calcularIMC = (x, y) => {
  let imc = y / (x * x);
  {
    if (imc < 18.5) {
      console.log(`Abaixo do peso: ${imc.toFixed(2)}`);
    } else if (imc >= 18.5 && imc < 25) {
      console.log(`Peso ideal: ${imc.toFixed(2)}`);
    } else if (imc >= 25 && imc < 30) {
      console.log(`Acima do peso: ${imc.toFixed(2)}`);
    } else if (imc >= 30 && imc < 40) {
      console.log("Obesidade grau I:", imc.toFixed(2));
    } else {
      console.log("Obesidade grau II/III: ", imc.toFixed(2));
    }
  }
  return;
};

let altura = 1.80;
let peso = 80;

calcularIMC(altura, peso);
