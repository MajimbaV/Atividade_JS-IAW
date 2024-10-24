const frase = "Essa é uma frase até que bem pequena"
let palavras = frase.split(' ')
console.log(palavras)
let soma = 0
for (i in palavras){
    soma += palavras[i].length
}
console.log(soma)