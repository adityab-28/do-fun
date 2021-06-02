// for instructions Board
var firstTime = true;
$(".help-btn").click(function() {  if (firstTime) {  $("#ins-btn").text("Close");  firstTime = false;  }  $(".instructions").slideToggle(500);  $(".help-btn").fadeOut(100).fadeIn(100);});
if (firstTime) {  $(".instructions").animate({  opacity: "90%"  }, 500);
  // $(".btn, .start-btn, #level-title").css("opacity","30%");
} $("#ins-btn").click(() => {  if (firstTime) {  $(".instructions").fadeOut(500); $("#ins-btn").text("Close");
    // $(".btn, .start-btn, #level-title").animate({opacity:1},100);
  $(".info-section").animate({  opacity: 0.93  }, 500);  firstTime = false;  } else {  $(".instructions").slideToggle(500);  }});
var clickInfo = false; $(".info-btn, #about-btn").click(function() {
  $("#about-btn").text("Close");
if (clickInfo) {
  $(".info-section").animate({  opacity: 1,  left: "-=15",  top: "+=35",  height: "toggle"  }, 200);  clickInfo = false;  }
else {  $(".info-section").animate({  opacity: 0,  top: "-=35",  left: "+=15",  height: "toggle"  }, 200);  clickInfo = true;  }
  $(".info-btn").fadeOut(100).fadeIn(100);});
