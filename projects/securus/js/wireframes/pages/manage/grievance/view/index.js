(function() {
  //----------- DEV MODE -------------
  $('.devmode-grievance-assigner').click(function() {
    $('.grievance-assigner').show().find('select').removeAttr('disabled');
    $('.grievance-processor').show().find('select').removeAttr('disabled');
    $('.grievance-status').hide().find('select').removeAttr('disabled');
    $('.grievance-actions').hide();
  });

  $('.devmode-grievance-processor').click(function() {
    $('.grievance-assigner').show().find('select').attr('disabled','disabled');
    $('.grievance-processor').show().find('select').removeAttr('disabled').val(1);
    $('.grievance-status').show().find('select').removeAttr('disabled');
    $('.grievance-actions').show();
    $('.grievance-actions #escalation-level2').find('input').removeAttr('disabled');
  });

  $('.devmode-grievance-view').click(function() {
    $('.grievance-assigner').show();
    $('.grievance-assigner').find('select').attr('disabled','disabled');
    $('.grievance-processor').show().find('select').attr('disabled','disabled');
    $('.grievance-status').show().find('select').attr('disabled','disabled');
    $('.grievance-actions').show().find('select').attr('disabled','disabled');
    $('.grievance-actions').find('input').attr('disabled','disabled');

  });
})();

//# sourceURL=js/wireframes/pages/manage/grievance/view/index.js