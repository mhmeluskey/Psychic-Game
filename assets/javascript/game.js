//outside event listner 
var wins = 0;
var losses = 0;
var guesses = 10;
var gameOver = guesses == 0;


//function for user to make a guess
document.onkeyup = function (event) {  
    
    
    //variable for guess to be stored for later use
    userGuess = event.key;
    //get the choices from the computer
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //get computer to randomly pick a letter after key is picked 
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
    //compare computer guess with user guess using conditional statements 
    console.log(computerGuess);


    //Check if user Guess is the same as computer Guess
    //var result = document.getElementById(youWin);



    var youLoseGuess = computerGuess != userGuess;
    console.log(youLoseGuess);
    if (guesses == 0) {
        this.getElementById("losses").innerHTML = ("Losses: " + ++losses);
        console.log("gameOver")
        guesses = 10; 
      
        
        }
    else if
    (youLoseGuess) {
        this.getElementById("guesses").innerHTML = ("Guesses: " + --guesses);
    } else {
        console.log("you win!");
        this.getElementById("wins").innerHTML = ("Wins: " + ++wins);

    };

   




    
    



} //endkeyup







//var youWin = userGuess === computerGuess;
//var youLose = userGuess != computerGuess;







//if the numbers are different subtract a life; if life equals 0; add a loss; then startover/
