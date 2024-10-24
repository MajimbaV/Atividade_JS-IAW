let data = new Date()
let dia = ''
let hora = data.toLocaleTimeString('pt-BR', {hour12: false})

switch (data.getDay()){
    case 0:
        dia = "Domingo"
        break
    case 1:
        dia = "Segunda Feira"
        break
    case 2:
        dia = "Terça-Feira"
        break
    case 3:
        dia = "Quarta-Feira"
        break
    case 4:
        dia = "Quinta-Feira"
        break
    case 5:
        dia = "Sexta-Feira"
        break
    case 6:
        dia = "Sábado"
        break
}

console.log(`Hoje é ${dia}`)
console.log(`A hora atual é: ${hora}`)