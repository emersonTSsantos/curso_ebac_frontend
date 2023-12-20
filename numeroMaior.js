
    const form = document.getElementById('valida-numero');
    const campoA = document.getElementById('campoA');
    const campoB = document.getElementById('campoB');
    const msgSucesso = document.querySelector('.msg-sucesso');
    const msgErro = document.querySelector('.msg-erro');
    const imgPositivo = document.getElementById('img-positivo');
    const imgNegativo = document.getElementById('img-negativo');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const numeroA = parseFloat(campoA.value);
        const numeroB = parseFloat(campoB.value);

        if (numeroB > numeroA) {
            
            msgSucesso.classList.add('msg-sucesso');
            msgSucesso.classList.remove('msg-erro');
            imgPositivo.style.display = 'block'
            imgNegativo.style.display = 'none'

            msgSucesso.innerHTML = 'Formulário válido! campo B é maior que campo A.';
            msgErro.textContent = ''; 

        } else {
            
            msgSucesso.classList.add('msg-erro');
            msgSucesso.classList.remove('msg-sucesso');
            imgPositivo.style.display = 'none'
            imgNegativo.style.display = 'block'

            msgErro.innerHTML = 'Formulário inválido! Certifique-se de que campo B é maior que o campo A.';
            msgSucesso.textContent = ''; 
        }

        campoA.value = '';
        campoB.value = '';
    });
