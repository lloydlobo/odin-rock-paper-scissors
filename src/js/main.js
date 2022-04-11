// computerPlay function to generate a random selection of the gameArray
function computerPlay() {
  let gameArray = ["Rock", "Paper", "Scissors"];

  // setting time
  let today = new Date();
  let updateTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  // random number generator to select the index of the gameArray
  let randomGameSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  let computerPlayChoice = `${updateTime} | Computer played ${randomGameSelection}`;
  computerPlayChoice = computerPlayChoice.toLowerCase();

  return randomGameSelection;
}
// remember to uncomment here
computerPlay();

// console.log(computerPlay());

// * set the logic of the game

// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// If the same, then it's a tie
// If the user enters something other than Rock, Paper, or Scissors, then it's an invalid entry

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
  // write your code here...
  computerSelection = computerPlay();
  console.log(computerSelection);
  // playerSelection prompts the user to enter a selection
  playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");
  alert(`You chose ${playerSelectionPrompt}`);
  playerSelectionPrompt =
    playerSelectionPrompt.toLowerCase(); /* ? is making it lower case -> case insensitive */
  console.log(`Player chose: ${playerSelectionPrompt}`);
  alert(`Computer chose ${computerSelection}`);

  // return the results of this functions call

  // it then returns a string to declare a winner of the round
  let statementSuccess = `You had a better hand than the computer!\n${"Paper"} beats ${"Rock"}!`;
  let statementFailure = `The computer had a better hand!\n${"Paper"} beats ${"Rock"}!`;
}

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
