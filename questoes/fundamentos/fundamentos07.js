let frase = "Essa é uma frase BEM grande para um programa minúsculo"
let palavras = frase.split(' ')

for (i in palavras){
    if(palavras[i].length < 5){
        palavras[i] = palavras[i].toLowerCase()
    }
    if(palavras[i].length >= 5){
        palavras[i] = palavras[i].toUpperCase()
    }
}

console.log(palavras.join(' '))