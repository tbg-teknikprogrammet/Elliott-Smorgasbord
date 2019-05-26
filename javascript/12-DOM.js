alert("start hacking bitch!");

var btn = document.getElementsByTagName("button")[0];
//maniopolape
btn.addEventListener("click", function(){
    document.querySelector("p").innerHTML = "you done it mate";
});
// Select
var lis = document.querySelectorAll("li");
var bla = 0;
for(var i = 0; i < lis.length; i++){
    if(bla === 1){
        lis[i].addEventListener("click", function(){
            this.style.textDecoration = "none";
        })
    }

    lis[i].addEventListener("click", function(){
        this.style.textDecoration = "line-through";
        bla = 1;
    })
    
}

var btnToggle = document.querySelector("#btnToggelbg");
var isPurple = false;

btnToggle.addEventListener("click", function(){
    document.getElementsByTagName("body")[0].classList.toggle("toggleBg");
})