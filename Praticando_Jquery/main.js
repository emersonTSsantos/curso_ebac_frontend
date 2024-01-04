$(document).ready(function () {

    $('#aparecerFormulario').click(function() {
        $('form').fadeIn(2000)
        $('li').fadeIn(2000)
    })
    
    $('#minimizarFormulario').click(function () {
        $('form').fadeOut(1000)
    })

    $('#addTarefas').click(function () {
        $('li').fadeIn(2000)
    })

    $('#minimizarFormulario').click(function () {
        $('li').fadeOut(1000)
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

