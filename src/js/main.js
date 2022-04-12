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
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay().toLowerCase();
  playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");
  // console.log(`Player Selection: ${playerSelectionPrompt}`);
  playerSelection = playerSelectionPrompt.toLowerCase();
  result = `${playerSelection}, ${computerSelection}`;
  console.log(`result is ${result}`);
  return result;
}
// promptPlayer(); /* if you run a function here and elsewhere you get it two times+ */

// console.log("🚀 ~ file: main.js ~ line 18 ~ promptPlayer", promptPlayer());

// function to compare the player and computer selections
function game() {
  scorePlayer = 0;
  scoreComputer = 0;
  round = 0;
  for (let i = 0; i < 5; i++) {
    playRound();
    round++;
    console.log(`Round: ${round}`);
  }
}
game();
