# Foundations | PROJECT: ROCK PAPER SCISSORS

## Assignment

**Source**: https://www.theodinproject.com/lessons/foundations-rock-paper-scissors#assignment

Don’t forget to commit early & often! You can reference the Commit Message lesson here!

1.  Start a new Git repo for your project.
1.  Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
1.  Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
1.  Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

    1.  Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).

1.  Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

    ```js
    function playRound(playerSelection, computerSelection) {
      // your code here!
    }

    const playerSelection = "rock";
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    ```

1.  Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

    1.  Remember loops? This is a great opportunity to use one to play those five rounds:

    ```js
    for (let i = 0; i < 5; i++) {
      // your code here!
    }
    ```

    1.  At this point you should be using console.log() to display the results of each round and the winner at the end.
    1.  Use prompt() to get input from the user. Read the docs here if you need to.
    1.  Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
    1.  Feel free to create more “helper” functions if you think it would be useful.
