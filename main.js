$(document).ready(function () {

    $('#aparecerFormulario').click(function() {
        $('form').fadeIn(2000)
        $('li').fadeIn()
    })

    $('#minimizarFormulario').click(function () {
        $('form').fadeOut()
        $('li').fadeOut()  
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
