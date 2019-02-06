// it al starts with the document, the root node
// document.URL;
// document.link;
// documents.body;
// document.head;
// alert("lil bitch");
// Takes a string argument and returns the one element with a matching ID
var element = document.getElementById("highlight");
console.log(element); // html
console.dir(element); // object

// Takes a string argument and returns  a list of element with a matching CLASS
var elements = document.getElementsByClassName("bolded");

// Takes a string argument and returns a list of elements with given tag name
var eles = document.getElementsByTagName("li");


var queryTag = document.querySelector("#highlight")

var queryALLTag = document.querySelectorAll(".bolded");

//exercise 1

var pID = document.getElementById("first");
var firstP = document.querySelector("p");
var p1class = document.getElementsByClassName("special")[0];
var p1tag = document.getElementsByTagName("p")[0];
var pnumero1 = document.querySelectorAll("#first");
