const form = document.getElementById('form-atividade');
const imgAprovado = ('<img src="aprovado.png" alt="emoji festejando"/>')
const imgReprovado = ('<img src="reprovado.png" alt="emoji triste"/>')
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'
const notaMinima = parseFloat(prompt('Digite a nota mínima:'))


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha()
    atualizarLinha()
    atualizarMediaFinal()
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida`);
    } else {

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>'
    linha += `<td> ${inputNomeAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value} </td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
    linha += `</td>`;

    linhas += linha 
}

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarLinha() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizarMediaFinal() {
    const mediaFinal = calculaMediaFinal()

    document.getElementById('Media-Final-Valor').innerHTML = mediaFinal.toFixed(1)
    document.getElementById('Media-Final-Resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado ;
}

function calculaMediaFinal() {
    
    let somasDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somasDasNotas += notas[i]
    }

    return somasDasNotas / notas.length

}