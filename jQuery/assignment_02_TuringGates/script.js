$(document).ready(function() {
  $('img').click(function() {
    var currentSrc = $(this).attr('src');
    var altSrc = $(this).attr('alt-pic');

    // Swap the src with the alt-pic value
    $(this).attr('src', altSrc);
    $(this).attr('alt-pic', currentSrc);
  });
});
