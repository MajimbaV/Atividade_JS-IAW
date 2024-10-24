function maiorPalavraNaFrase(frase){
    const fraseRepartida = frase.toLowerCase().split(" ")
    let maxCaracteres = 0
    let maioresPalavras = []
    for(let palavra of fraseRepartida){
        if (palavra.length >= maxCaracteres){
            maxCaracteres = palavra.length
        }
    }
    for(let palavra of fraseRepartida){
        if (palavra.length >= maxCaracteres){
            maioresPalavras.push(palavra)
        }
    }
    return maioresPalavras
}

const frase = "Essa é a última daquelas frases que são bem grandes para um programa pequeno"

console.log(maiorPalavraNaFrase(frase))