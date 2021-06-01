// for instructions Board
var firstTime = true;$(".help-btn").click(
function (){  $(".instructions").slideToggle(500);  $("#ins-btn").text("Close"); $(".help-btn").fadeOut(100).fadeIn(100);});
if(firstTime){  $(".instructions").animate({opacity:"90%"},500);  $(".btn, .start-btn, #level-title").css("opacity","30%"); }
$("#ins-btn").click(() =>{
if(firstTime){  $(".instructions").slideUp(300); $(".btn, .start-btn, #level-title").animate({opacity:1},100);  firstTime = false;}  else {  $(".instructions").slideToggle(500);  } });
