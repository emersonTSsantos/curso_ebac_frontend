$(document).ready(function () {
            
    $('#telefone').mask('(00) 00000-0000', { placeholder: '(00) 0000-0000' });

    $('#cadastro-form').validate({
        rules: {
            nome: 'required',
            email: {
                required: true,
                email: true
            },
            telefone: 'required',
            'aceito-termos': 'required'
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',
            email: {
                required: 'Este campo é obrigatório.',
                email: 'Por favor, insira um e-mail válido.'
            },
            telefone: 'Este campo é obrigatório.',
            'aceito-termos': 'Você deve concordar com os termos do site.'
        },
        submitHandler: function (form) {
            console.log('Formulário enviado com sucesso!');
        }
    });
});