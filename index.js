var buttonSequence = ["green", "red", "yellow", "blue"];
var gamePattern = [];
var userPattern = [];
var level = 0;
var start = false;

$(document).keypress(function(event){

  if(!start){
    level++;
    $(".heading").text("Level " + level);
    newSequence();
    start = true;
  }
});

  $(".btn").click(function(){

    var userInput = $(this).attr("id");
    userPattern.push(userInput);
    playSound(userInput);
    animatePress(userInput);

    checkSequence(userPattern.length - 1);


  });

function newSequence(){

  var randomNumber = Math.floor(Math.random() * 4);
  var buttonColor = buttonSequence[randomNumber];

  gamePattern.push(buttonColor);

  animatePress(buttonColor);
  playSound(buttonColor);

}

function playSound(color){
  var audio = new Audio("sounds/" + color + ".mp3");
  audio.play();
}

function animatePress(color){
  $("#" + color).addClass("pressed");

  setTimeout(function(){
    $("#" + color).removeClass("pressed");
  }, 100);
}

function checkSequence(index){

  if(gamePattern[index] == userPattern[index]){
    if(gamePattern.length == userPattern.length){
      setTimeout(function(){
        level++;
        userPattern = [];
        $("h1").text("Level " + level);
        newSequence();
      }, 1000);
    }
  }else{
    gameOver();
  }

}

function gameOver(){
  $("h1").text("Game Over Refresh The Page To Start New Game");
}
