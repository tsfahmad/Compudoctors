$(document).ready(function () {
  toggleContentDisplay('mainPage');
  $('#imageSlider').load('./html/slider.html');
  $('#footerMarque').load('./html/footerLogo.html');
  //$('#imageContainer').html('');
  $('.menu').click(function () {
    var $container = $(this);
    toggleContentDisplay($container.attr('data-attr-content'));
  });
});

function toggleContentDisplay(id) {
  $('.content').hide();
  $('.menu').removeClass('active');
  $('.menu[data-attr-content = ' + id + ']').addClass('active');
  $('#'+ id +'').show();

}
