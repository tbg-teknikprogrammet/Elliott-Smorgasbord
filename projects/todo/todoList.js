

var toDoList = []; // emptey to do list




document.getElementsByTagName("button")[0].addEventListener("click", function(){
var number = prompt("what you wanna do?");     
    switch(number){

         // // Add something to the list 
         case "1": 
            // Create an HTML list item (li) that displays you todo thing 
            var li = document.createElement("li");
            let tempStrAns = prompt("Write the thing you need to add");
            toDoList.push(tempStrAns);// Also add it to the javascript list so we can store it 
            
            var t = document.createTextNode("" + tempStrAns);
            li.appendChild(t);
            if(tempStrAns === ""){// If user have not writen anything
                alert("you must add something");
            }

            else{// If he have, add that thing to the todo list
                document.getElementById("myUl").appendChild(li);
            }
            // Create an "X" mark beside the newly added list element. (this is remove button)
            var p = document.createElement("p")
            removeButton = document.createTextNode("X")
            p.appendChild(removeButton);
            document.getElementsByTagName("li").appendChild(p)
           
         break;

         // View al things inside you to do list
         case "2":
            ViewToDoList();
         break;

         // Remove something from the list   
         case "3":
            // Let's show the List of thing to make the choice 
            // easier for the user.
            ViewToDoList();
            let tempIntAns = prompt("What thing would you like to delete, pleas enter a numerical answer")
            toDoList.splice(tempIntAns, 1)
         break;

     }
});

// The funtion writes out all the elements in the to do list 
function ViewToDoList (){  
    for(let i = 0; i <= toDoList.length-1; i++){
        console.log(toDoList[i]);
    }
}