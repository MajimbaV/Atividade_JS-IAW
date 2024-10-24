somaPares = 0
somaImpares = 0

for (let i = 1; i < 99; i++){
    if(i%2 == 0){
        somaPares += i
    }else{
        somaImpares += i
    }
}

console.log(`Soma dos números pares: ${somaPares}`)
console.log(`Soma dos números impares: ${somaImpares}`)