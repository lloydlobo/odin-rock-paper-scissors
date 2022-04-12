// function to generate a random selection of the gameArray
function computerPlay() {
  const gameArray = ["Rock", "Paper", "Scissors"];
  // random number generator to select the index of the gameArray
  const randomGameSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];

  return randomGameSelection;
}
computerPlay();

// function that plays a single round of the game
function playRound(playerSelection, computerSelection) {
  let computerRandomSelection = computerPlay();

  // prompt the user to type a choice
  const playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");

  // alert the user about their selections
  console.log(`You chose ${playerSelectionPrompt}.`);
  console.log(`Computer chose ${computerRandomSelection}.`);

  // convert player and computer Selection to lower case
  playerSelection = playerSelectionPrompt.toLowerCase();
  computerSelection = computerRandomSelection.toLowerCase();

  // * playRound() result
  const playRoundResult = `${playerSelection}, ${computerSelection}`; /* string generated at each round */

  // statements to determine the round result
  const statementSuccess = `You had a better hand than the computer!\n${playerSelection} beats ${computerSelection}!`;
  const statementFailure = `The computer had a better hand!\n${computerSelection} beats ${playerSelection}!`;
  const statementTie = `It's a tie!\n${playerSelection} ties ${computerSelection}!`;

  // declare game rules /* [  ] can convert these 3 lines to helper function() */
  const rockBeatsScissors = "rock, scissors";
  const paperBeatsRock = "paper, rock";
  const scissorsBeatsPaper = "scissors, paper";

  // declare Score
  let playerScore = 0;
  let computerScore = 0;

  // runs when the game ties
  function gameTies() {
    playerScore;
    computerScore;
    console.log(`${statementTie}`);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // runs when the player wins
  function playerWins() {
    playerScore++;
    computerScore;
    console.log(`${statementSuccess}`);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // runs when the computer wins
  function computerWins() {
    computerScore++;
    playerScore;
    console.log(`${statementFailure}`);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  // add game logic here...
  if (playerSelection === computerSelection) {
    return gameTies();
  } else if (
    playRoundResult === rockBeatsScissors ||
    playRoundResult === paperBeatsRock ||
    playRoundResult === scissorsBeatsPaper
  ) {
    return playerWins();
  } else {
    return computerWins();
  }

  // return results of each round
  console.log(playRoundResult);
}

// [  ] helper function WIP
// function playRoundResult() {
//   // declare variables
//   let playerScore = 0;
//   let computerScore = 0;
//   let round = 0;
// }

// function that plays 5 rounds of function playRound()
function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
  }
}
game();

// for (let score = 0; score < 5; score++) {
//   console.log(`Score: ${score}`);
// }

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
