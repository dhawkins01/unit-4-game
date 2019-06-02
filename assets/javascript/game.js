/// Global Variables
$(document).ready(function () {
    // set the initial values
    var targetNumber = Math.floor(Math.random() * 102) + 19;
    var blueGem = Math.floor(Math.random() * 12) + 1;
    var orangeGem = Math.floor(Math.random() * 12) + 1;
    var redGem = Math.floor(Math.random() * 12) + 1;
    var yellowGem = Math.floor(Math.random() * 12) + 1;
    var userScore = 0;
    var wins = 0;
    var losses = 0;



    // logging out for testing purposes
    // console.log("target number: " + targetNumber);
    // console.log("blueGem: " + blueGem);
    // console.log("orangeGem: " + orangeGem);
    // console.log("redGem: " + redGem);
    // console.log("greenGem: " + greenGem);

    // This function resets the values of the gems and the target number when the user wins or loses
    function newGame() {
        targetNumber = Math.floor(Math.random() * 102) + 19;
        blueGem = Math.floor(Math.random() * 12) + 1;
        orangeGem = Math.floor(Math.random() * 12) + 1;
        redGem = Math.floor(Math.random() * 12) + 1;
        yellowGem = Math.floor(Math.random() * 12) + 1;
        userScore = 0;
        $("#target-score").text(targetNumber);
        $("#your-score").text(userScore);
        $("#wins").text(wins);
        $("#losses").text(losses);
    }

    // Main Game code

    // displays the initial scores and wins and losses
    $("#target-score").text(targetNumber);
    $("#your-score").text(userScore);
    $("#wins").text(wins);
    $("#losses").text(losses);

    
    // when each button is clicked, added the value to the score then checks the win/lose condition
    $("#blue-button").on("click", function() {
        userScore = userScore + blueGem;
        console.log("click");
        $("#your-score").text(userScore);
        if (userScore === targetNumber) {
            alert("You Win!!");
            wins++;
            newGame();
        }
    
        else if (userScore > targetNumber) {
            alert("You Lose :(");
            losses++;
            newGame();
        }

    });

    $("#orange-button").on("click", function() {
        userScore = userScore + orangeGem;
        console.log("click");
        $("#your-score").text(userScore);
        if (userScore === targetNumber) {
            alert("You Win!!");
            wins++;
            newGame();
        }
    
        else if (userScore > targetNumber) {
            alert("You Lose :(");
            losses++;
            newGame();
        }

    });

    $("#red-button").on("click", function() {
        userScore = userScore + redGem;
        console.log("click");
        $("#your-score").text(userScore);
        if (userScore === targetNumber) {
            alert("You Win!!");
            wins++;
            newGame();
        }
    
        else if (userScore > targetNumber) {
            alert("You Lose :(");
            losses++;
            newGame();
        }

    });

    $("#yellow-button").on("click", function() {
        userScore = userScore + yellowGem;
        console.log("click");
        $("#your-score").text(userScore);
        if (userScore === targetNumber) {
            alert("You Win!!");
            wins++;
            newGame();
        }
    
        else if (userScore > targetNumber) {
            alert("You Lose :(");
            losses++;
            newGame();
        }

    });
    
    
    
    
    // if (userScore === targetNumber) {
    //     alert("You Win!!");
    //     wins++;
    //     newGame();
    // }

    // else if (userScore > targetNumber) {
    //     alert("You Lose :(");
    //     losses++;
    //     newGame();
    // }

    // on clicks to add to the user score after each image is clicked

   




});