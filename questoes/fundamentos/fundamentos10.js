const nomeCompleto = "Alan Mathison Turing"
let nomeSeparado = nomeCompleto.split(" ")
console.log(nomeSeparado)
let nomeCitacao = ""

for(let i = nomeSeparado.length - 1; i > 0; i--){
    nomeCitacao = nomeCitacao + nomeSeparado[i][0].toUpperCase() + ". "
}

nomeCitacao += nomeSeparado[0]

console.log(nomeCitacao)