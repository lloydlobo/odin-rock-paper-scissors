// function to generate a random selection of the gameArray
function computerPlay() {
  let gameArray = ["Rock", "Paper", "Scissors"];

  let today = new Date();
  let updateTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  // random number generator to select the index of the gameArray
  let randomGameSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  let computerPlayChoice = `${updateTime} | Computer played ${randomGameSelection}`;

  computerPlayChoice = computerPlayChoice.toLowerCase();

  return randomGameSelection;
}

// hoisted function declaration
computerPlay(); /* can call function above function definition */

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();

  // playerSelection prompts the user to enter a selection
  playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");

  // alert the user about their selections
  alert(`You chose ${playerSelectionPrompt}`);
  alert(
    `Computer chose ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )}` /* convert the first string letter to uppercase */
  );

  playerSelection = playerSelectionPrompt.toLowerCase();

  playRoundResult = `[${playerSelection}, ${computerSelection}]`; /* array generated at each round */

  // return the results of the playRound functions call
  return playRoundResult;
}

// playRound(playerSelection, computerSelection);

// it then returns a string to declare a winner of the round
let statementSuccess = `You had a better hand than the computer!\n${"Paper"} beats ${"Rock"}!`;
let statementFailure = `The computer had a better hand!\n${"Paper"} beats ${"Rock"}!`;

const playerSelection =
  "rock"; /* make this case-insensitive  users can input rock, ROCK, RocK or any variations */
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));

// function that plays a single round of the game

function game() {
  // play a five round game with playRound function
  for (let i = 0; i < 5; i++) {
    // add your code here...
  }

  // display console.log statements to show the results of each round
  // also with it display winner at the end of the game

  // use prompt() to get input from the user.
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
  // * Feel free to create more “helper” functions if you think it would be useful.
}

// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// If the same, then it's a tie
// If the user enters something other than Rock, Paper, or Scissors, then it's an invalid entry
