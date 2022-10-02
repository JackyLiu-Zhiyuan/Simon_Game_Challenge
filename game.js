let buttonColours = ["red", "blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = true;

function nextSequence(){
  let randomNumber = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $( "#" + randomChosenColour).ready(() => {
	setInterval(() => {
		$('p').fadeIn();
		$('p').fadeOut();
	}, 500);
  level ++;
  $("h1").text("level " + level);
});

var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
audio.play();

}

$(".btn").on("click", function(event){
  let userChosenColour = event.currentTarget.id;
  userClickedPattern.push(userChosenColour);
  var audio = new Audio("sounds/" + userChosenColour + ".mp3");
  audio.play();
  animatePress(userChosenColour);
  console.log(userClickedPattern)
})

function animatePress(currentColour){
  setTimeout(() => {  $("#currentColour").addClass("pressed"); }, 5000);
}

$(document).keypress(function(event){
  nextSequence();
});

$(document).keypress(function() {
  if (!started) {
    nextSequence();
    started = true;
  }
});
