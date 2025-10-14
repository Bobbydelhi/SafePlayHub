$(document).ready(function() {
  $('.spa-section').hide();
  $('#principal').show();

  
  $('.btn[data-section]').on('click', function() {
    const section = $(this).data('section');
    $('.spa-section').hide();
    $('#' + section).show();
    $('html, body').scrollTop(0);
  });


  $('.card').on('click', function(e) {
    
    if ($(e.target).is('a, button, input, textarea, label')) return;

    const descripcion = $(this).find('.descripcion');
    if (descripcion.length) {
      descripcion.toggle(); 
    }
  });

  
  $('#buscador').on('keyup', function() {
    const valor = $(this).val().toLowerCase();
    $('.card').each(function() {
      const texto = $(this).text().toLowerCase();
      $(this).toggle(texto.indexOf(valor) > -1);
    });
  });

  
  $('#contacto_form').on('submit', function(e) {
    e.preventDefault();
    const email = $('#email').val().trim();
    const nombre = $('#nombre').val().trim();
    const num = $('#num').val().trim();
    const message = $('#message').val().trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (nombre && num && message && emailValido) {
      alert('Gracias!!!');
      this.reset();
    } else {
      alert('Rellena el formulario.');
    }
  });
});
