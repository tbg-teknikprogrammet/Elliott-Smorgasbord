

var toDoList = []; // emptey to do list

document.getElementsByTagName("button")[0].addEventListener("click", function(){

    var tempStrAns = prompt("what you wanna add?");     
    // Create an HTML list item (li) that displays you todo thing 
    var li = document.createElement("li");            
    li.setAttribute("id", "elementId")
    toDoList.push(tempStrAns);// Also add it to the javascript list so we can store it
    var t = document.createTextNode("" + tempStrAns);
    li.appendChild(t);
        if(tempStrAns === ""){// If user have not writen anything
            alert("you must add something");
        }

        else{// If he have, add that thing to the todo list
            document.getElementById("myUl").appendChild(li);
        }

       
});

var lis = document.querySelectorAll("li");// a list of al the html li (list elements)
var deleted = 0; // using this binary number to scratch out certain li. But also to regret the scratch 
for(var i = 0; i < lis.length; i++) {
    lis[i].addEventListener("click", function() { // if a click on any li then do this function ↓
        // if an element has previosly been scratched(deleted) then revive it
        if(deleted >0){
            this.style.textDecoration = "none";
            this.style.backgroundColor = ""; // removes the color added by the js... so now its original
            deleted --;
        }
        // otherwise delete it know
        else{
            this.style.textDecoration = "line-through";
            this.style.backgroundColor = "#444";
            deleted ++;//next time we know to not delete but to revive 
        }
    });
};
