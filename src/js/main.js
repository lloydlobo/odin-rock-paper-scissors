// computer picks randomly from rock, paper, and scissors
function computerPlay() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomNumber = Math.random() * rockPaperScissors.length;
  computerRandom = rockPaperScissors[Math.floor(randomNumber)];
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
  // userChoice = prompt();
  // userChoice = prompt("Pick rock, paper, or scissors");
  const userChoice = userChoiceValue.toLowerCase();
  const computerRandomResult = computerPlay();
  const computerChoice = computerRandomResult;

  return [userChoice, computerChoice];
}

// play a single round
// compare user and computer choices
function playRound(userChoice, computerChoice) {
  return userChoice === "rock" && computerChoice === "scissors"
    ? `You win! ${userChoice} beats ${computerChoice}`
    : userChoice === "paper" && computerChoice === "rock"
    ? `You win! ${userChoice} beats ${computerChoice}`
    : userChoice === "scissors" && computerChoice === "paper"
    ? `You win! ${userChoice} beats ${computerChoice}`
    : userChoice === "rock" && computerChoice === "paper"
    ? `You lose! ${computerChoice} beats ${userChoice}`
    : userChoice === "paper" && computerChoice === "scissors"
    ? `You lose! ${computerChoice} beats ${userChoice}`
    : userChoice === "scissors" && computerChoice === "rock"
    ? `You lose! ${computerChoice} beats ${userChoice}`
    : userChoice === computerChoice
    ? `It's a tie! ${userChoice} ties ${computerChoice}`
    : "";
}

// includes "you win" or "you lose"
function game() {
  let userScore = 0; /* sets to 0 and resets the value when restarted */
  let computerScore = 0; /* sets to 0 and resets the value when restarted */
  let round = 0; /* sets to 0 and resets the value when restarted */
  const win = "win";
  const lose = "lose";
  const tie = "tie";
  for (let i = 0; i < 5; i++) {
    const [userChoice, computerChoice] = fetchUserComputerSelection();
    const roundResult = playRound(userChoice, computerChoice);
    round++;
    if (roundResult.includes(win)) {
      userScore++;
    } else if (roundResult.includes(lose)) {
      computerScore++;
    } else roundResult.includes(tie);

    console.log(
      `Round ${round}: ${roundResult}\nUser score: ${userScore} Computer score: ${computerScore}\nYou chose ${userChoice} Computer chose ${computerChoice}`
    );
  }

  // announce final results of 5 round game
  if (userScore > computerScore) {
    console.log(
      `Game over! You win!\nFinal score: userScore: ${userScore} to computerScore: ${computerScore}`
    );
    return `Game over! You win!`;
  } else if (userScore < computerScore) {
    console.log(
      `Game over! You lose!\nFinal score: userScore: ${userScore} to computerScore: ${computerScore}`
    );
    return `Game over! You lose!`;
  } else {
    console.log(
      `Game over! It's a tie!\nFinal score: userScore: ${userScore} to computerScore: ${computerScore}`
    );
    return `Game over! It's a tie!`;
  }
}
game();

// restart game
function restartGame() {
  const promptMessageRestart = `Would you like to play again? (y/n)`;
  const reset = prompt(promptMessageRestart, `y`);
  if (reset === "y") {
    game(); /* [] can add a loop here */
    restartGame(); /* prompts user again when game() ends 2nd time */
  } else {
    console.log("Thanks for playing!");
  }
}
restartGame();
