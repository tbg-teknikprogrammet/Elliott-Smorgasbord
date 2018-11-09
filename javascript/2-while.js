// När använder vi while?
// När vi inte vet hur många gånger koder behöver itereras

// while(vilkor){
    //kod

// }
alert("hello");

var text = "";
var i = 5;

while(i <=50){
    if(i%3 == 0 && i%5==0) 
    {
        text += i +"<br>";
    }
    i++;
}
document.getElementById("output").innerHTML = text;



