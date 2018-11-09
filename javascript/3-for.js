// Number 1
for(var i = -10; i<=19;i++){
    console.log(str(i)); 
}

// Number 2
for(var i = 10; i<=40;i++){
    if(i%2 == 1){
        console.log(str(i));
    }
}

// Number 3
for(var i = 10; i<=40;i++){
    if(i%2 != 1){
        console.log(str(i));
    }
}

// Number 4
for(var i = 5; i<=40;i++){
    if(i%5 == 1 || i% 3 == 1){
        console.log(i);
    }
    console.log(str(i)); 
}

var rows = 5;
var cols = 5;

for(var i = 0; i < rows; i++){
    for(var j = 0; j < cols; j++){
        console.log(str("*"));
    }
}

function isEven(X){
    if(X % 2 === 0){
        return true
    }
    else{
        return false
    }
}

//     var replaceString = str.replace(/-/g, "_"); 
//return myString;



function localScope(){
    var showScope = 31;
    console.log(showScope);
}

localScope();
console.log(showScope);

var showScope = "hej";
var king = "Dennis";

