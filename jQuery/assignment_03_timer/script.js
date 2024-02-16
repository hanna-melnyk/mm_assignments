$(document).ready(function() {
  var timer;
  var isTimerOn = false;
  var duration = 25 * 60; // Initial duration 25 minutes
  var display = $('#timer');

  function startTimer(duration, display) {
    var start = Date.now(),
      diff,
      minutes,
      seconds;
    function timerFunction() {
      // get the number of seconds that have elapsed since startTimer() was called
      diff = duration - (((Date.now() - start) / 1000) | 0);

      // does the same job as parseInt truncates the float
      minutes = (diff / 60) | 0;
      seconds = (diff % 60) | 0;

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.text(minutes + ":" + seconds);

      if (diff <= 0) {
        // add one second so that the count down starts at the full duration
        start = Date.now() + 1000;
      }

      if (diff <= 0) {
        clearInterval(timer);
        isTimerOn = false;
        $('#alarmSound')[0].play();
      }
    };
    // we don't want to wait a full second before the timer starts
    timerFunction();
    timer = setInterval(timerFunction, 1000);
  }

  $('#start').click(function() {
    if (!isTimerOn) {
      isTimerOn = true;
      var minutes = $('#customMinutes').val();
      duration = (parseInt(minutes, 10) || 25) * 60;
      startTimer(duration, display);
    }
  });

  $('#reset').click(function() {
    clearInterval(timer);
    isTimerOn = false;
    var minutes = $('#customMinutes').val();
    duration = (parseInt(minutes, 10) || 25) * 60;
    display.text("25:00");
  });

  $('#customMinutes').change(function() {
    if (!isTimerOn) {
      var minutes = $(this).val();
      duration = (parseInt(minutes, 10) || 25) * 60;
      display.text(minutes + ":00");
    }
  });
});
