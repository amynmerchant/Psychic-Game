var compChoice = ("abcdefghijklmnopqrstuvwxyz").split("");
var toGuess = compChoice[Math.floor(Math.random() * compChoice.length)];


var wins = 0;
function winCheck() {
    document.querySelector("#wins").innerHTML = "Wins: " + wins;
}
winCheck();


var losses = 0;
function lossCheck() {
    document.querySelector("#losses").innerHTML = "Losses: " + losses;
}
lossCheck();


var guessesLeft = 9;
function guessesLeftCheck() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
}
guessesLeftCheck();


document.onkeyup = function(event) {
    var userGuess = event.key.toLowerCase();
    
    var soFar = [];
    soFar.push(userGuess);
    document.querySelector("#soFar").innerHTML = "Your guesses so far: " + userGuess;
    guessesLeft--;
    guessesLeftCheck();

    if (userGuess === toGuess) {
        alert("Correct! What are the chances!!");
        wins++;
        winCheck();
        guessesLeft = 9;
        guessesLeftCheck();
        toGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        soFar = [];
        }
        
    else if (guessesLeft === 0) {
        alert("Out of attempts. Start again!");
        losses++;
        lossCheck();
        guessesLeft = 9;
        guessesLeftCheck();
        toGuess = compChoice[Math.floor(Math.random() * compChoice.length)];
        soFar = []; 
        }
    }
    

//unable to figure out how to generate a new computer guess at the begining of each round and how to print userGuesses in a string.
//Also want to limit user input to only alphabets.

