// computer picks randomly from rock, paper, and scissors
function computerPlay() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomNumber = Math.random() * rockPaperScissors.length;
  const computerRandom = rockPaperScissors[Math.floor(randomNumber)];
  return computerRandom;
}

// prompts the user
function promptMessage() {
  const customPrompt = `Pick rock, paper, or scissors`;
  const computerRandomValue = computerPlay();
  const userInput = prompt(
    customPrompt,
    `${computerRandomValue}`
  ); /* message is customPrompt and default value is generated randomly by computerPlay() => `${computerRandom} */
  const userInputMessage = userInput;
  return userInputMessage;
}

// fetches user and computer choices values
function fetchUserComputerSelection() {
  const userChoiceValue = promptMessage();
  const userChoice = userChoiceValue.toLowerCase();
  const computerRandomResult = computerPlay();
  const computerChoice = computerRandomResult;

  return [userChoice, computerChoice];
}

// play a single round
// compare user and computer choices
function playRound(userChoice, computerChoice) {
  return userChoice === "rock" && computerChoice === "scissors"
    ? `You win!\n${userChoice} crushes ${computerChoice}`
    : userChoice === "paper" && computerChoice === "rock"
    ? `You win!\n${userChoice} covers ${computerChoice}`
    : userChoice === "scissors" && computerChoice === "paper"
    ? `You win!\n${userChoice} cuts ${computerChoice}`
    : userChoice === "rock" && computerChoice === "paper"
    ? `You lose!\n${computerChoice} covers ${userChoice}`
    : userChoice === "paper" && computerChoice === "scissors"
    ? `You lose!\n${computerChoice} cuts ${userChoice}`
    : userChoice === "scissors" && computerChoice === "rock"
    ? `You lose!\n${computerChoice} crushes ${userChoice}`
    : userChoice === computerChoice
    ? `It's a tie!\n${userChoice} ties ${computerChoice}`
    : "";
}

// function calls statements
function declareStatement() {
  const win = "win";
  const lose = "lose";
  const tie = "tie";
  return [win, lose, tie];
}

// game logic and plays 5 rounds of rock paper scissors
function game() {
  let userScore = 0;
  let computerScore = 0;
  let round = 0;

  for (let i = 0; i < 5; i++) {
    const [userChoice, computerChoice] = fetchUserComputerSelection();
    const roundResult = playRound(userChoice, computerChoice);
    round++;

    // adds to scores when one wins
    function addScore() {
      const [win, lose, tie] = declareStatement();

      let score = roundResult.includes(win)
        ? userScore++
        : roundResult.includes(lose)
        ? computerScore++
        : roundResult.includes(tie);
      return score;
    }
    addScore();

    const gameRoundResult = `Round ${round}: ${roundResult}\nYou chose ${userChoice} Computer chose ${computerChoice}\nUser score: ${userScore} Computer score: ${computerScore}`;
    console.log(`${gameRoundResult}`);
  }

  // Game Over Results
  const successUser = `Game over! You succeeded!\nFinal score:\nuserScore: ${userScore} to computerScore: ${computerScore}`;
  const successComputer = `Game over! Computer succeeded!\nFinal score:\nuserScore: ${userScore} to computerScore: ${computerScore}`;
  const successUserComputer = `Game over! It's a tie! Everyone succeeded!\nFinal score:\nuserScore: ${userScore} to computerScore: ${computerScore}`;

  const gameFinalResult =
    userScore > computerScore
      ? successUser
      : userScore < computerScore
      ? successComputer
      : successUserComputer;

  return console.log(gameFinalResult);
}
game();

// restart game
function restartGame() {
  const promptMessageRestart = `Would you like to play again? (y/n)`;
  const reset = prompt(promptMessageRestart, `y`);
  if (reset === "y") {
    game();
    restartGame(); /* prompts user again when game() ends 2nd time */
  } else {
    console.log("Thanks for playing!");
  }
}
restartGame();
