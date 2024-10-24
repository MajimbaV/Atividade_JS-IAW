function fraseIncluiPalavra(frase, palavra){
    let fraseRepartida = frase.toLowerCase().split(" ")
    
    if(fraseRepartida.includes(palavra.toLowerCase())){
        return console.log(`A palavra "${palavra}" está na frase`)
    }else{
        return console.log(`A palavra "${palavra}" não está na frase`)
    }
}

let frase = "Mais uma frase que é bem grande para um programa pequeno"

fraseIncluiPalavra(frase, "programa")