function contarVogaisConsoantes(frase){
    let quantVogais = 0
    let quantConsoantes = 0
    for(caracter of frase.toUpperCase()){
        if(caracter == " "){
            continue
        }else if("BCDFGHJKLMNPQRSTV".includes(caracter)){
            quantConsoantes += 1
        }else{
            quantVogais += 1
        }
    }

    return console.log(`Consoantes: ${quantConsoantes}, Vogais: ${quantVogais}`)
}

contarVogaisConsoantes("Essa é mais uma daquelas frases meio grandinhas")