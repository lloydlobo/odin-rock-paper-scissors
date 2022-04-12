// function to generate a random selection of the gameArray
function computerPlay() {
  const gameArray = ["Rock", "Paper", "Scissors"];

  // random number generator to select the index of the gameArray
  const randomGameSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];
  randomGameSelection;

  return randomGameSelection;
}

// hoisted function declaration
computerPlay(); /* can call function above function definition */

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
  let computerRandomSelection = computerPlay();
  computerRandomSelection;

  // make computerRandomSelection to lowercase
  computerSelection = computerRandomSelection.toLowerCase();
  computerSelection;

  // playerSelection prompts the user to enter a selection
  let playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");
  playerSelectionPrompt;

  // alert the user about their selections
  console.log(`You chose ${playerSelectionPrompt}.`);
  console.log(
    `Computer chose ${computerSelection[0].toUpperCase()}${computerSelection.slice(
      1
    )}.` /* convert the first string letter to uppercase */
  );

  // make playerSelection to lower case
  playerSelection = playerSelectionPrompt.toLowerCase();

  const playRoundResult = `${playerSelection}, ${computerSelection}`; /* string generated at each round */

  // it then returns a string to declare a winner of the round
  const statementSuccess = `You had a better hand than the computer!\n${playerSelection} beats ${computerSelection}!`;
  const statementFailure = `The computer had a better hand!\n${computerSelection} beats ${playerSelection}!`;
  const statementTie = `It's a tie!\n${playerSelection} ties ${computerSelection}!`;

  // declare game rules
  const rockBeatsScissors = "rock, scissors";
  const paperBeatsRock = "paper, rock";
  const scissorsBeatsPaper = "scissors, paper";

  // add game logic here...
  if (playerSelection === computerSelection) {
    console.log(`${statementTie}`);
  } else if (
    playRoundResult === rockBeatsScissors ||
    playRoundResult === paperBeatsRock ||
    playRoundResult === scissorsBeatsPaper
  ) {
    console.log(`${statementSuccess}`);
  } else {
    console.log(`${statementFailure}`);
  }

  return playRoundResult; /* typeof string  */
}

playRound();

// function that plays a single round of the game

// function game(rounds) {
// }
// game();

// for (let score = 0; score < 5; score++) {
//   console.log(`Score: ${score}`);
// }

const playerScore = 0;
const computerScore = 0;

// play a five round game with playRound function
// for (let i = 0; i < 5; i++) {
// add your code here...

// display console.log statements to show the results of each round

// also with it display winner at the end of the game

// use prompt() to get input from the user.
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt
// * Feel free to create more “helper” functions if you think it would be useful.

// Rock beats Scissors
// Paper beats Rock
// Scissors beats Paper
// If the same, then it's a tie
// If the user enters something other than Rock, Paper, or Scissors, then it's an invalid entry
