// varibeldeclaration
var btnPlayer1 = document.querySelector("#btnPlayer1");
var scorePlayer1 = document.querySelector("#scorePlayer1");
var intScore1 = 0;

var btnPLayer2 = document.querySelector("#btnPlayer2");
var scorePlayer2 = document.querySelector("#scorePlayer2");
var intScore2 = 0;

// var gameIsRunningg
// // ONLY start the game if user clicks the button "start"
// var gameIsRunning = document.getElementById("start");// Find button
// gameIsRunning.addEventListener("click", function(){// Listen for a click on this button
//     gameIsRunningg = true; // set the condition for the game to start
// })

// var input = document.querySelector("#setScore").value;
// var ScoreToWin = Number(input);

var ScoreToWin = 10;
var gameIsRunningg = true;

if(gameIsRunningg === true) {
    // Listen for clicks from player one
    btnPlayer1.addEventListener("click", function(){
        intScore1 = intScore1 +1;
        
        var strScore1 = intScore1.toString(); 
        scorePlayer1.innerHTML = strScore1;
        if (intScore1 === ScoreToWin)
        {
            PlayerHasWon("1");
        }
    });

    // Listen for click from player one
    btnPlayer2.addEventListener("click", function(){
        intScore2 = intScore2 +1;
        if (intScore2 === ScoreToWin)
        {
            PlayerHasWon("2");
        }
        var strScore2 = intScore2.toString(); 
        scorePlayer2.innerHTML = strScore2;

    });
}

function PlayerHasWon(playerNum){
    document.getElementsByTagName("h1")[1].innerHTML = "Player " + playerNum + " has WON!";
    gameIsRunningg = false;
    scorePlayer1 = 0;
    scorePlayer2 = 0;
}