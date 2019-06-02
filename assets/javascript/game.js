/// Global Variables

// set the initial values
var targetNumber = Math.floor(Math.random() * 102) + 19;
var blueGem = Math.floor(Math.random() * 12) + 1;
var orangeGem = Math.floor(Math.random() * 12) + 1;
var redGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var userScore = 0;
var win = 0;
var loses = 0;



// logging out for testing purposes
console.log("target number: " + targetNumber);
console.log("blueGem: " + blueGem);
console.log("orangeGem: " + orangeGem);
console.log("redGem: " + redGem);
console.log("greenGem: " + greenGem);

// This function resets the values of the gems and the target number when the user wins or loses
function newGame() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    blueGem = Math.floor(Math.random() * 12) + 1;
    orangeGem = Math.floor(Math.random() * 12) + 1;
    redGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    userScore = 0;
    $("#target-score").text(targetNumber);
    $("#your-score").text(userScore);
}

// Main Game code
$("#target-score").text(targetNumber);
$("#your-score").text(userScore);