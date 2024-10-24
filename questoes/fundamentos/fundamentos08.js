const frase = "Essa é uma frase AINDA maior para um programa ainda MAIS minúsculo"
let evilFrase = ""

for(letra of frase){
    evilFrase = letra + evilFrase
}

console.log(evilFrase)