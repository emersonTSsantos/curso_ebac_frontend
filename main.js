function adicionarContato() {
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    if (nome && telefone) {
        const tabelaContatos = document.getElementById('tabelaContatos');
        const tbody = tabelaContatos.querySelector('tbody');

        const linhasExistentes = tbody.getElementsByTagName('tr');
        let telefoneRepetido = false;

        for (const linha of linhasExistentes) {
            const colunaTelefone = linha.getElementsByTagName('td')[1].textContent;

            if (colunaTelefone === telefone) {
                telefoneRepetido = true;
                break;
            }
        }

        if (telefoneRepetido) {
            alert('Telefone já existe na agenda.');
        } else {
            const novaLinha = document.createElement('tr');
            novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
            tbody.appendChild(novaLinha);

            document.getElementById('nome').value = '';
            document.getElementById('telefone').value = '';
        }
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}


