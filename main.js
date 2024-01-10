$(document).ready(function() {
    $('#telefone').mask('(00) 0000-00000', { placeholder: '(00) 0000-0000' });

    $('#cpf').mask('000.000.000-00', { placeholder: '000.000.000-00' });

    $('#cep').mask('00000-000', { placeholder: '00000-000' });


    $('form').validate({
        rules: {
            nome: { required: true },  
            telefone: { required: true },
            email: { required: true, email: true },
            cpf: { required: true },
            endereco: { required: true },
            cep: { required: true }
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            telefone: 'Este campo é obrigatório.',
            email: 'Este campo é obrigatório e deve ser um e-mail válido.',
            cpf: 'Este campo é obrigatório.',
            endereco: 'Este campo é obrigatório.',
            cep: 'Este campo é obrigatório.'
        },
        submitHandler: function(form) {

            console.log('Formulário enviado com sucesso!');
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});
