$(document).ready(function(){
  var seconds = "00";
  var tens = "00";
  var $appendTens = $("#tens");
  var $appendSeconds = $("#seconds");
  var $buttonStart = $('#button-start');
  var $buttonStop = $('#button-stop');
  var $buttonReset = $('#button-reset');
  var interval;
  var animationInterval;


  // CSS styling
  var $timer = $('#timer');
  $timer.addClass("timer-background");
  $timer.css({
      padding: "10px",
      textAlign: "center",
      borderRadius: "15px",
      backgroundColor: "rgb(150,100,0)"
  });

  $buttonStart.addClass("button-style");
  $buttonStop.addClass("button-style");
  $buttonReset.addClass("button-style");

  $(".button-style").css({
      backgroundColor: "orange",
      borderRadius: "5px"
  });
  $(".button-style").on("mouseover", function(){
      $(event.target).css({
          width: "50px",
          height: "30px"
      });
  });
  $(".button-style").on("mouseout", function(){
      $(event.target).css({
          width: "",
          height: ""
      });
  });

  $(".wrapper").css({
      padding: "5px 50px",
      width: "300px",
      textAlign: "center",
      borderRadius: "15px",
      backgroundColor: "rgb(250,150,50)"
  });
  $(".wrapper h1").css({
      fontFamily: "cursive"
  });



  $buttonStart.on("click", function() {
      clearInterval(interval);
      interval = setInterval(startTimer, 10);

      clearInterval(animationInterval);
      animationInterval = setInterval(animateTimer, 2500);
      $timer.css({
          backgroundColor: "rgb(150,200,0)"
      });
  });

  $buttonStop.on("click", function() {
      clearInterval(interval);
      clearInterval(animationInterval);
      if (seconds !== "00" || tens !== "00"){
          $timer.css({
              backgroundColor: "rgb(250,100,50)"
          });
      }
  });

  $buttonReset.on("click", function() {
      clearInterval(interval);
      clearInterval(animationInterval);
      tens = "00";
      seconds = "00";
      $appendTens.html(tens);
      $appendSeconds.html(seconds);
      $timer.css({
          backgroundColor: "rgb(150,100,0)"
      });
  });

  function startTimer() {
      tens++;

      if (tens < 9) {
          $appendTens.html("0" + tens);
      }

      if (tens > 9) {
          $appendTens.html(tens);

      }

      if (tens > 99) {
          console.log("seconds");
          seconds++;
          $appendSeconds.html( "0" + seconds);
          tens = 0;
          $appendTens.html("0" + tens);
      }

      if (seconds > 9) {
          $appendSeconds.html(seconds);
      }
  }


  function animateTimer(){
      $timer.animate({
          opacity: 0.8
      }, 1000);
      $timer.animate({
          opacity: 1
      }, 1000);
  }
});