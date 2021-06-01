// Creating the button-color-array . . .
var firstLoadMob = true;var buttonColours = ["red", "blue", "green", "yellow"];var gamePattern = [];var userClickedPattern = [];var level = 0;var started = false;var score = 0;var highScore = 0;var viewSize = $(document).width();

// detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  //Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});


function nextSequence() {
  //Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
  userClickedPattern = [];
  // Inside nextSequence(), increase the level by 1 every time nextSequence() is called. . .
  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  // assign the value in randomChosenColour using the randomNumber to select a random colour from the buttonColours array.
  var randomChosenColour = buttonColours[randomNumber];
  // Add the new randomChosenColour, generated to the end of the gamePattern
  gamePattern.push(randomChosenColour);
  // console.log(gamePattern);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);

}


function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

// create new function called playSound() that takes a single input parameter called name.
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  //  reset the values of level, gamePattern and started variables.
  level = 0;
  gamePattern = [];
  started = false;
}

if (viewSize <= 1024) {
  if (firstLoadMob) {
    $("h1").text("Press Start button to play");

    firstLoadMob = false;
  }
  $(".start-btn").click(() => {

    if (!started && (!firstLoadMob)) {
      $("#level-title").text("Level " + level);
      nextSequence();
      $(".score-box").fadeOut(200);
      started = true;
      $(".btn").animate({
        opacity: "100%"
      });
    }
  });

  $(".start-btn").click(() => {
    $(".start-btn").animate({
      width: 64,
      height: 64
    }, 80).animate({
      width: 72,
      height: 72
    },80);
    $("#start").animate({fontSize:11.8},80).animate({fontSize:12.8},80);
  });

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // console.log("success");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {
    // console.log("wrong");
    playSound("wrong");
    score = level;
    if (score > highScore) {
      highScore = score;
    }
    $(".score-box").fadeIn(500);
    $("body").addClass("game-over");

    $("#p1").text("Score : " + score);
    $("#p2").text("High Score : " + highScore);

    $("#level-title").text("Game Over, Press start to Play again");
    $(".btn").animate({
      opacity: "20%"
    });

    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 300);

    startOver();
  }
}


} else {
  $(document).keypress(() => {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
      $(".score-box").fadeOut(200);
      $(".btn").animate({
        opacity: "100%"
      });
    }
  });

  function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      // console.log("success");
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      // console.log("wrong");
      playSound("wrong");
      score = level;
      if (score > highScore) {
        highScore = score;
      }
      $("body").addClass("game-over");
      $(".score-box").fadeIn(500);
      $("#score-title").text("Score Board");
      $("#p1").text("Score : " + score);
      $("#p2").text("\n High Score : " + highScore);

      $("#level-title").text("Game Over, Press Any Key to Restart");
      $(".btn").animate({
        opacity: "20%"
      });

      setTimeout(() => {
        $("body").removeClass("game-over");
      }, 300);

      startOver();
    }
  }
}
