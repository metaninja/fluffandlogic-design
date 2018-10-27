(function() {

  $('.remove-override').hide().parent().children('input[type=checkbox]').attr('disabled', 'disabled');

  $('.remove-override').click(function() {
    $(this).parent().children('.override').show();
    $(this).hide();
    $(this).parent().children('input[type=checkbox]').attr('disabled', 'disabled');
    $(this).parent().children('input[type=text]').attr('disabled', 'disabled');
  });

  $('.override').click(function() {
    $(this).parent().children('.remove-override').show();
    $(this).hide();
    $(this).parent().children('input[type=checkbox]').removeAttr('disabled');
    $(this).parent().children('input[type=text]').removeAttr('disabled');
  });

})();

