//select 
var element = document.getElementById("highlight");
var element2 = document.getElementsByClassName("bolded")[0];
var element3 = document.getElementsByClassName("bolded")[1];

//manipulate
element.style.color = "red";
element.style.border = "2px solid black";
element.style.fontSize = "20px";

element2.style.color = "orange";
element2.style.border = "2px solid black";
element2.style.fontSize = "15px";

element3.style.color = "yellow";
element3.style.border = "2px solid black";
element3.style.fontSize = "10px";

// no DRY code
var ele = document.querySelector("h1");
ele.classList.add("some-class");

//select
var special = document.getElementsByClassName("special")[1];
//manipulate
special.classList.add("another-class");
special.classList.remove("another-class");
special.classList.toggle("another-class");