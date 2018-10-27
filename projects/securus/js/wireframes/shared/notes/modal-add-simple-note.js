(function() {

  var maxCount = 127;
  $('.simple-note-textarea-count').text(maxCount);

  $('.simple-note-textarea').bind('input propertychange', function() {
    var charCount = maxCount - $(this).val().length;
    $('.simple-note-textarea-count').text(charCount);
  });

})();

