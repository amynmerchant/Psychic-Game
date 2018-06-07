var compChoice = ("abcdefghijklmnopqrstuvwxyz").split("");

var wins = 0;

var losses = 0;

var guessLeft = 9;

var soFar = 

function reset() {
    wins = 0;
    losses = 0;
    guessLeft = 9;
    soFar = "";
}

function reStart() {
    guessLeft = 9;
    soFar = "";
}

function matchKey() {
    document.querySelector("#soFar").innerHTML = userChoice;

    
        document.querySelector("#soFar").innerHTML = userChoice;
        //reset guessesLeft and SoFar
    }
    else {
        //let soFar take upto 10 values, at 10th value
        losses++;
    }
}



document.onkeyup = function(event) {

    var userChoice = event.key.toLowerCase();

    document.querySelector("soFar").innerHTML = userChoice + ", ";
    for (i = 0; i < 10; i++)
        if(compChoice === userChoice) {
            wins++;
            break;
            reStart();
        };

        else {
            guessLeft--;
            //prints more of the userChoice upto 9 more
        }

        if (guessLeft = 0) {
            alert("Out of guesses. Start again!")
            return;
            reset();
        }

      

      





//console.log(compChoice);