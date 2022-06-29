window.onload = function () {

  var seconds = 00;
  var chhotu = 00;
  var appendChhotu = document.getElementById("chhotu")//second 00 
  var appendSeconds = document.getElementById("seconds")// first 00
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }

  buttonStop.onclick = function () {
    clearInterval(Interval);
  }


  buttonReset.onclick = function () {
    clearInterval(Interval);
    chhotu = "00";
    seconds = "00";
    appendChhotu.innerHTML = chhotu;
    appendSeconds.innerHTML = seconds;
  }



  function startTimer() {
    chhotu++;

    if (chhotu <= 9) {
      appendchhotu.innerHTML = "0" + chhotu;
    }

    if (chhotu > 9) {
      appendChhotu.innerHTML = chhotu;

    }

    if (chhotu > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      chhotu = 0;
      appendChhotu.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }

  }


}