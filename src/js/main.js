// function to generate a random selection of the gameArray
function computerPlay() {
  const gameArray = ["Rock", "Paper", "Scissors"];
  // random number generator to select the index of the gameArray
  const randomGameSelection =
    gameArray[Math.floor(Math.random() * gameArray.length)];

  return randomGameSelection;
}
computerPlay();

// function to prompt the player to select Rock, Paper, or Scissors
function promptPlayer() {
  let playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");
  // console.log(`Player Selection: ${playerSelectionPrompt}`);
  return playerSelectionPrompt;
}
// promptPlayer(); /* if you run a function here and elsewhere you get it two times+ */

// console.log("🚀 ~ file: main.js ~ line 18 ~ promptPlayer", promptPlayer());

// function to compare the player and computer selections
function fiveRoundGame() {
  for (let i = 0; i < 5; i++) {
    promptPlayer();
  }
}
fiveRoundGame();

// function playRound(playerSelection, computerSelection) {
//   const computerSelection = computerPlay();
//   console.log(`Computer Selection: ${computerSelection}`);
//   playerSelection = JSON.stringify.promptPlayer();
//   return [playerSelection, computerSelection];
// }

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }
