const alunos = [
    ["Mauro", [10, 50, 100]],
    ["Marcos", [80, 75, 90]], 
    ["Mauricio", [90, 80, 100]], 
    ["Marcio", [20, 50, 30]], 
    ["Mario", [70, 70, 70]]]

for(aluno of alunos){
    let alunoNome = aluno[0]
    let alunoNotas = aluno[1]
    let alunoMedia = Math.round(alunoNotas.reduce((a, b) => a + b, 0)/3)
    let estadoAluno = "Aprovado"

    if (alunoMedia < 70){
        estadoAluno = "Retido"
    }

    console.log(alunoNome, alunoMedia, estadoAluno)
}