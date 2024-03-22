let array = ["aqrst", "ukaei", "ffooo"];

/*
    aqrst
    uka-e-i
    ffo-o-o
*/

// Object.entries(array);

const eVogal = (letra) => {
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        return true;
    } else {
        return false;
    }
}

const quadrado = () => {
    for (const [indexLinha,palavra] of Object.entries(array)) {
        for (const [indexColuna,letra] of Object.entries(palavra)) {
            if (eVogal(letra)) {
                if (eVogal(array[indexLinha][parseInt(indexColuna)+1])) {
                    if (eVogal(array[parseInt(indexLinha)+1][indexColuna])) {
                        if (eVogal(array[parseInt(indexLinha)+1][parseInt(indexColuna)+1])) {
                            console.log("["+indexLinha+","+indexColuna+"]");
                            return;
                        }
                    }
                }
            }
        }
    }
}

quadrado();