function inverterNumero(numero){
    let numeroInvertido = 0
    do {
        numeroInvertido = numeroInvertido * 10 + (numero % 10)
        numero = Math.floor(numero / 10)
    } while (numero > 0);

    return numeroInvertido
}

console.log(inverterNumero(1234))

