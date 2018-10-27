(function(){

  $('.no-user-assigned-security-role').show();
  $('.user-assigned-security-role').hide();

  $('#styled-upload-bulk-users-btn').click(function(){
    $('#upload-bulk-users-file').click();
  });

  $('#upload-bulk-users-file').change(function() {
    $('.filename').text($('#upload-bulk-users-file').val());
  });

  $('.btn-bulk-add-security-roles').click(function() {
    $('#modal-bulk-add-users').modal('hide');
    $('#modal-bulk-add-users-security-roles').modal('show');
  });

  $('.btn-add-security-role').click(function() {
    $('.no-user-assigned-security-role').hide();
    $('.user-assigned-security-role').show();
  });

})();

//# sourceURL=js/wireframes/pages/manage/users/modal-bulk-add-users-security-roles.js