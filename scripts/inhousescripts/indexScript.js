$(document).ready(function () {
  toggleContentDisplay('mainPage');
  //$('#imageContainer').html('');
  $('.menu').click(function () {
    var $container = $(this);
    toggleContentDisplay($container.attr('data-attr-content'));
  });
});

function toggleContentDisplay(id) {
  $('.content').hide();
  $('#'+ id +'').show();
}