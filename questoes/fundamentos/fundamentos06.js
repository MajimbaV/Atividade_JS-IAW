const array = [4, 2, 6, 8, 0, 2, 3, 4, 3, 5, 4, 6, 7, 4]
array.sort()
let num, ocorrencias = 1, maxOcorrencias = 0

for(let i in array){
    if (array[i] === array[i - 1]) {
        ocorrencias ++
    }else{
        ocorrencias = 1
    }
    
    if (ocorrencias>maxOcorrencias){
        maxOcorrencias = ocorrencias
        num = array[i]
    }
}

console.log(num)