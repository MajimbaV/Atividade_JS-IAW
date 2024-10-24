function arrayMenorMaior(array){
    if(array.length < 10){
        return console.error("ERRO: A array deve ter no mínimo 10 elementos");
    }
    
    let maiorNumero = array.reduce((a, b) => {
        return Math.max(a, b)
    })
    let menorNumero = array.reduce((a, b) => {
        return Math.min(a, b)
    })

    return console.log(`Menor Número: ${menorNumero} || Maior Número: ${maiorNumero}`)
}

const numeros = [21, 2, 3, 4, 5, 6, 7, 8, 9, 20]

arrayMenorMaior(numeros)
