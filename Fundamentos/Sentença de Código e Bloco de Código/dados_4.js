//  Constante é um valor que estará sempre igual, e não pode ser alterado durante a execução do programa.

const media = 7;
let nota = 9;

if (nota >= media) {
    console.log("Aprovado!");
} else if(nota < media && nota > 4){
    console.log("Recuperação");
}else{
    console.log("Reprovado!");
}