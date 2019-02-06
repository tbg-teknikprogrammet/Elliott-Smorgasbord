
var movieList = [];
var exit = false;
while(exit === false){
    console.log("what do?");
    console.log("1: addMovies");
    console.log("2: show movies");
    console.log("3: exit");

    var ans = prompt("what do");

    switch(ans){
        case "1":
            AddMovies();
            break;
        case "2":
            ShowMovies(movieList);
            break;
        case "3":
            console.log("please come again")
            exit = true;
            break;
    }

}


function AddMovies(){
    // all this data goes into the object "movie"
    var name = prompt("what is the name of the movie?");
    var rating = prompt("what is the rating of the movie?");

    // create a boolean varibel from the users answer
    var hasWatched;
    var tempStrHasWatched = prompt("have you look? [Y]es or [N]o") // user answer
    // if user has watched the movie then boolean is true
    if (tempStrHasWatched === 'Y' || tempStrHasWatched === 'y'){
        hasWatched = true;
    }
    // if user has not watched the movie then boolean is false
    else if (tempStrHasWatched !== 'Y' || tempStrHasWatched !== 'y'){
        hasWatched = false;
    }

    // creating an object with the received data
    var movie = {
        Name: name,  // key:value pair
        Rating: rating,
        HasWatched: hasWatched
    };
    movieList.push(movie);
}

function ShowMovies(array){
    // for(var i=0; i<=array.length; i++){
    //     if(movie[i].HasWatched === true){
    //         console.log(movie[i].Name + movie[i].Rating + "have watch it")
    //     }
    //     else if(movie[i].HasWatched === false){
    //         console.log(movie[i].Name + movie[i].Rating + "have not watch it")
    //     }

    // }
    array.forEach(function(movies){
        if(HasWatched === true){
            console.log("name is " + Name + " rating is " + Rating + "you have watch it");

        }
        else if(HasWatched === false){
            console.log("name is " + Name + " rating is " + Rating + "you not have watch it");

        }
    })

}