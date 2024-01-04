$(document).ready(function () {

    $('#aparecerFormulario').click(function() {
        $('form').fadeIn(2000)
        $('li').fadeIn()
        // ao clicar no botão do header o formulário aparece
    })

    $('#minimizarFormulario').click(function () {
        $('form').fadeOut()
        $('li').fadeOut()
        // ao clicar no botão cancelar do formulário o mesmo desaparece
    })

    $('form').submit(function (e) {
        e.preventDefault();
        const novaTarefa = $('form input').val();
        if (novaTarefa) {
            $('ul').append('<li>' + novaTarefa + '</li>');
            $('form input').val('');
        }
    });
});

$(document).ready(function () {
    $('ul').on('click', 'li', function () {
        $(this).toggleClass('concluido');
    });
});
