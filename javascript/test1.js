

var hemligtnummer = 7;
var fel = 0;

while(true){
    var nummer = Number(prompt("Din ålder"));

    if(nummer<hemligtnummer){
        prompt("för lite");
        fel++;
    }

    else if(nummer>hemligtnummer){
        prompt("för mycket");
        fel++;
    }

    else if(nummer == hemligtnummer){
        break;
    }
}

document.writeln("Du hade "+fel+" fel");




