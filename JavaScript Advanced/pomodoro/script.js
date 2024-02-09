
// for updating values:
function changeTime(elementId, delta) {
  var element = document.getElementById(elementId);
  var currentValue = parseInt(element.innerText, 10);

  // Calculate new value based on delta
  var newValue = currentValue + delta;

  // Ensure the new value stays within the 0-59 range for seconds, and 1-60 for minutes
  if (elementId.includes('seconds')) {
    newValue = newValue < 0 ? 59 : newValue > 59 ? 0 : newValue;
  } else { // Assuming minutes
    newValue = newValue < 1 ? 1 : newValue > 60 ? 60 : newValue;
  }

  // Update the element's text with the new value, ensuring it's two digits for seconds
  element.innerText = elementId.includes('seconds') ? newValue.toString().padStart(2, '0') : newValue;
}




//

var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;

start.addEventListener('click', function(){
  if(startTimer === undefined){
    startTimer = setInterval(timer, 1000)
  } else {
    alert("Timer is already running");
  }
})

reset.addEventListener('click', function(){
  wm.innerText = 25;
  ws.innerText = "00";

  bm.innerText = 5;
  bs.innerText = "00";

  document.getElementById('counter').innerText = 0;
  stopInterval()
  startTimer = undefined;
})

stop.addEventListener('click', function(){
  stopInterval()
  startTimer = undefined;
})


//Start Timer Function
function timer(){
  //Work Timer Countdown
  if(ws.innerText != 0){
    ws.innerText--;
  } else if(wm.innerText != 0 && ws.innerText == 0){
    ws.innerText = 59;
    wm.innerText--;
  }

  //Break Timer Countdown
  if(wm.innerText == 0 && ws.innerText == 0){
    if(bs.innerText != 0){
      bs.innerText--;
    } else if(bm.innerText != 0 && bs.innerText == 0){
      bs.innerText = 59;
      bm.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if(wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0){
    wm.innerText = 25;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText++;
  }
}

//Stop Timer Function
function stopInterval(){
  clearInterval(startTimer);
}
