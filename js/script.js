// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
$("#shoot").click(function() {
  let userInput = $("#input").val();
  $("#userChoice").text(userInput);
  let computerDecision = $("#computerChoice").;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  $("#computerChoice").text(randomNumber);
  
  if (randomNumber === 1) {
    $("#computerChoice").text("Rock");
  } else if (randomNumber === 2) {
    $("#computerChoice").text("Paper");
  } else if (randomNumber === 3) {
    $("#computerChoice").text("Scissors");
  }
  if (userInput === computerDecision) {
    $("#result").text("Tie");
    
    
    
    
    
    
  }
});
