const alunos = ['Italo', 'Gabi', 'Caue', 'Gabs'];
const notas = [10, 9, 5, 5];

const alunos2 = alunos.map(function(itemAtual, index) {
    return {
        nome: itemAtual,
        nota: notas[index]
    };
});

const alunosPassaram = alunos2.filter(function(item) {
    return item.nota >= 6;
});

console.log(alunosPassaram);