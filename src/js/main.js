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
  playerSelectionPrompt = prompt("Rock, Paper, or Scissors?");

  playerSelection = playerSelectionPrompt.toLowerCase();
  computerSelection = computerPlay().toLowerCase();
  roundResult = [playerSelection, computerSelection];

  return roundResult; /* can add multiple items to the roundResult and destructure individually later on */
}

// rock paper scissors game logic
function playRoundResults() {
  const [playerSelection, computerSelection] = playRound();

  if (playerSelection === computerSelection) {
    console.log("Tie!");
    const everyoneWinsNumber = 0;
    return everyoneWinsNumber;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    const playerWins = `You win! ${playerSelection} beats ${computerSelection}`;
    // console.log(playerWins);
    const playerWinsNumber = 1;
    return [playerWinsNumber, playerWins];
  } else {
    const computerWins = `You lose! ${computerSelection} beats ${playerSelection}`;
    // console.log(computerWins);
    const computerWinsNumber = -1;
    return [computerWinsNumber, computerWins];
  }
}
playRoundResults();

// splice out a number for each (win, lose, and tie)
// get all round result statements
function playRoundResultsPointStatement() {
  const result = playRoundResults();
  const [point, roundStatement] = result;
  point;
  roundStatement;
  // console.log(`Result is ${point}\n${roundStatement}`);
  return result;
}

// runs the game 5 times + declare scores and winner
function game() {
  scorePlayer = 0;
  scoreComputer = 0;
  round = 0;
  for (let i = 0; i < 5; i++) {
    round++;
    console.log(`Round: ${round}`);
    // es6 destructuring of function playRound() to two variables
    const [playerSelection, computerSelection] = playRound();
    console.log(
      `playerSelection: ${playerSelection}\ncomputerSelection: ${computerSelection}`
    );
    //
    const [point, roundStatement] = playRoundResultsPointStatement();
    if (point === 1) {
      scorePlayer++;
      console.log(
        `scorePlayer: ${scorePlayer} scoreComputer: ${scoreComputer}\n${roundStatement}`
      );
    } else if (point === -1) {
      scoreComputer++;
      console.log(
        `scorePlayer: ${scorePlayer} scoreComputer: ${scoreComputer}\n${roundStatement}`
      );
    } else if (point === 0) {
      console.log(
        `scorePlayer: ${scorePlayer} scoreComputer: ${scoreComputer}\n${roundStatement}`
      );
    }
  }
}
game();
