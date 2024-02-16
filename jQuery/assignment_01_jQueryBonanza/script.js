$(document).ready(function(){
  $('#fade-out').click(function(){
    $(this).next('p').fadeOut();
  });
  $('#append').click(function(){
    $(this).next('p').append(' Some more text.');
  });
  var colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  var colorIndex = 0; // Start at the first color

  $('#change-color').click(function(){
    // Set the color and then increment the colorIndex
    $(this).next('p').css('color', colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length; // Loop back to start after the last color
  });
});
