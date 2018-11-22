
// setInterval(sing, 2500);

//var anon = setInterval(function() {
  //  console.log("im an anonymous function")
//}, 2000);

function myTimer() {
    var d = new Date();
    document.getElementById("output").innerHTML = d.toLocaleTimeString();
}

myTimer();

var myTime = setInterval(myTimer, 1000);

document.getElementsByTagName("button")[0].addEventListener("click", function(){
    clearInterval(myTime);
});

document.querySelector("button").addEventListener("dblclick", function(){
    myTime = setInterval(myTimer, 1000);
});

