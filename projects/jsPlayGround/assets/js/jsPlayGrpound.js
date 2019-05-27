//↓↓ S C O R E  K E E P E R ↓↓
// variable declaration
const input = document.querySelector('input'); // Desides the score
const printScore = document.getElementById('scoreToWin'); // Writes that score on webbsite 
var scoreToWin = 0;
var playerOneScore = 0;
var playerTwoScore = 0;
var gameOn;

input.addEventListener('input', updateScore); //Listen for selected score
// Writes that selected score onto the web page
function updateScore(e) {
  printScore.textContent = e.srcElement.value;
  scoreToWin = Number(printScore.textContent);
  gameOn = true; // Here the game is now set and thus, its now ready to be played
}

// Listen for player one to click
var playerOne = document.getElementById("btnPlayerOne").addEventListener("click",function(){
    if(gameOn === true){ // But will only add score if the game is set and ready
        playerOneScore++; // it will be 1 the first time the player clicks his button
        document.getElementById("scorePlayerOne").innerHTML = playerOneScore.toString();
        if(playerOneScore === scoreToWin){
            gameOn = false;// The game is over, therefore, no more score counting
            document.getElementById("thatHiddenShit").innerHTML = "Player 1 won!";
            cleanScoreKeeper();
        }
    }        
})
// Listen for player two to click
var playerTwo = document.getElementById("btnPlayerTwo").addEventListener("click",function(){
    if(gameOn === true){ // But will only add score if the game is set and ready
        playerTwoScore++; // it will be 1 the first time the player clicks his button
        document.getElementById("scorePlayerTwo").innerHTML = playerTwoScore.toString();
        if(playerTwoScore === scoreToWin){
            gameOn = false; // The game is over, therefore, no more score counting
            document.getElementById("thatHiddenShit").innerHTML = "Player 2 won!";
            cleanScoreKeeper();
        }
    }        
})
function cleanScoreKeeper(){
    playerOneScore = 0;
    document.getElementById("scorePlayerOne").innerHTML = "0";
    playerTwoScore = 0;
    document.getElementById("scorePlayerTwo").innerHTML = "0";
    scoreToWin = 0;

}
// ↑↑ S C O R E  K E E P E R ↑↑




// ↓↓ L I G H T  B O X ↓↓
var bigImage = document.getElementById("bigImage") // The container for the lightbox
var images = document.getElementsByClassName("Img"); // List of small images
// Loop through the list of small images 
for(var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function(){ // When user clicks on any small image
        
        // If its the first image 
        if(images[0]){
            bigImage.src = "assets/img/Prog1Big.jpg";
            bigImage.style.zIndex = "2"; // This container is hidden, now, lets pop it out    
        }
        // If its the second image
        else if(images[1]){
            bigImage.src = "assets/img/Prog2Big.jpg"
            bigImage.style.zIndex = "2"; // This container is hidden, now, lets pop it out    

        } 
        // If its the third image
        else if(images[2]){
            bigImage.src = "assets/img/Prog3Big.jpg"
            bigImage.style.zIndex = "2"; // This container is hidden, now, lets pop it out    

        }
    });
    // Click on this new big image, and it disappears 
    bigImage.addEventListener("click", function(){
        bigImage.src = "";
        bigImage.style.zIndex = "-2" // Now, let's hide it again(it lingers in the background)
    })
}
// ↑↑ L I G H T  B O X ↑↑




// ↓↓ M E D I T A T I O N  A P P ↓↓
var meditationImage = document.getElementById("meditationIcon");
var progressBar = document.getElementById("myBar");
var width = 1; // will be sent to css as the width of the progress bar
var musicFile = document.getElementById("music");
meditationImage.addEventListener("click", function(){
    
    var id = setInterval(frame, 10);
    musicFile.play();
    function frame(){
        // Don't stop until the progress bar is full = time is up
        if(width >= 100){
            clearInterval(id);
            musicFile.pause();
            musicFile.currentTime = 0;
            progressBar.style.width = "1%";
            width = 1; // Resetting the varibles so that we can play it again
        }
        // While the clock is still ticking, the progressbar is still loading = music still playing
        else{
            width = width + 0.025;
            progressBar.style.width = width + "%";

        }
    }

})

// ↑↑ M E D I T A T I O N  A P P ↑↑


// ↓↓ L I F T I N G  A P P ↓↓
 var bar = document.getElementById("bar");
 var bench = document.getElementById("bench");
 var btnRep = document.getElementById("btnRep");


 btnRep.addEventListener("click", function(){
     bar.style.marginBottom = "-60px";
     alert("DOWN!");
     bar.style.marginBottom = "-100px";

 })
 // ↑↑ L I F T I N G  A P P ↑↑

// ↓↓ P A I N T ↓↓
 window.addEventListener("load", () => {
    const canvas = document.querySelector("#canvas"); // The box within which you can draw
    var context = canvas.getContext("2d"); // context will be your brush
    var painting = false;
    var colorRed = document.getElementById("colorRed");
    var colorBlue = document.getElementById("colorBlue");

    // Resize 
    canvas.height = 500;
    canvas.width = 500;

    // This will inticate were you start drawing, in other words, were you put down the brush
    function StartDrawing(e){
        painting = true;
        Draw(e);

    }
    // This will inticate were you end the drawing, in other words, were you lift up the brush
    function EndDrawing(){
        painting = false;
        context.beginPath();


    }
    function Draw(e){
        if(!painting){
            return;
        }
        context.lineWidth = 10;
        context.lineCap = "round";
        context.lineTo(e.clientX, e.clientY); // Method that adds a new point and creates a
                                              // line TO that point FROM the last specified point in the canvas
        context.stroke();
        context.beginPath();
        context.moveTo(e.clientX, e.clientY); // So that the line follows
    }
    // Eventlisteners
    canvas.addEventListener("mousedown", StartDrawing)
    canvas.addEventListener("mouseup", EndDrawing)
    canvas.addEventListener("mousemove", Draw)
    colorRed.addEventListener("click", function(){
        context.strokeStyle = "red";
    })
    colorBlue.addEventListener("click", function(){
        context.strokeStyle = "blue";
    })

 });

 // ↑↑ P A I N T ↑↑

 // ↓↓ W H I T E  M O D E ↓↓
 var wrapper = document.getElementsByClassName("wrapper")[0];
 var getWhiteMode = document.getElementById("whiteModeHeader");
 var whiteMode = false;
 getWhiteMode.addEventListener("click",function(){
    if(whiteMode === false){
        wrapper.style.backgroundColor = "white";
        whiteMode = true;
    }
    else{
        wrapper.style.backgroundColor = "#474B4F";
        whiteMode = false;
    }
 });