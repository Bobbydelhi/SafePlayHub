$(document).ready(function(){
  $('.spa-section').hide(); 
  $('#principal').show();
  
  $('.btn[data-section]').click(function(){
    const section = $(this).data('section');
    $('.spa-section').hide();
    $('#' + section).show();
    $('html, body').scrollTop(0);
  });
});
