
 var numberOfRight = 0;
var arr1 = ["1","2","3"];
var arr2 = ["1","2","3"];
function reverse(arr1){
        for(var i = arr1.length-1; i>=0;i++){
            if(arr1[i]===arr[i-1]){
                numberOfRight +=1;
            }
        }

        if (numberOfRight === arr1.length){
            return true
        }
    }

 reverse(arr1, arr2);   
 if(reverse == true){
     console.log("sant")
 }

