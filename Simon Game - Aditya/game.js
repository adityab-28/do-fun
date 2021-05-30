// Creating the button-color-array . . .
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var level = 0;
var started = false;
var score = 0;
var highScore = 0;

// detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(() => {
  // The h1 title starts out saying "Press A Key to Start",
  //  when the game has started, change this to say "Level 0".
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
    $(".score-box").animate({opacity: 0});
    $(".btn").animate({opacity: "100%"});
  }
});

// detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
  //Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  // console.log(userClickedPattern);
  //play the sound of corresponding button detected. . .
  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length - 1);
});

// Create a new function called checkAnswer(), it should take one input with the name currentLevel.
function checkAnswer(currentLevel) {
  /*console.log(currentLevel + "  & ");
  console.log("game Pattern : " + gamePattern);
  console.log("userClickedPattern: " + userClickedPattern);*/
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
    if(score>highScore){ highScore = score;}
    $("body").addClass("game-over");
    $(".score-box").animate({opacity: "75%"});
    $("#p1").text("Score : " + score );
    $("#p2").text("\n High Score : " + highScore);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    $(".btn").animate({opacity:"20%"});

    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 300);

    startOver();
  }
}

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

// Create a new function called animatePress(),
//  it should take a single input parameter called currentColour.
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
