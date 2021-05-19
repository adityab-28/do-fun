for (var i = 0; i < 7; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    // alert("I got clicked!");
    // this.style.color = "white";
    makeSound(this.innerHTML);

  });
}

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

});

function makeSound(key){
  switch (key) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      buttonAnimation(key);
      break;
    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      buttonAnimation(key);
      break;
    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      buttonAnimation(key);
      break;
    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      buttonAnimation(key);
      break;
    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      buttonAnimation(key);
      break;
    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      buttonAnimation(key);
      break;
    case "l":
      var kickbass = new Audio('sounds/kick-bass.mp3');
      kickbass.play();
      buttonAnimation(key);
      break;
    default:
      console.log(this);
  }
}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.toggle("pressed");

  setTimeout(function(){
    activeButton.classList.toggle("pressed");
  }, 200);
}
