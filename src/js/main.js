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

// game logic and plays 5 rounds of rock paper scissors
function game() {
  let userScore = 0; /* sets to 0 and resets the value when restarted */
  let computerScore = 0; /* sets to 0 and resets the value when restarted */
  let round = 0; /* sets to 0 and resets the value when restarted */

  // combine constants win, lose, tie as "win", "lose", "tie"
  const win = "win";
  const lose = "lose";
  const tie = "tie";

  // loops 5 times fetchUserComputerSelection() & playRound()
  for (let i = 0; i < 5; i++) {
    const [userChoice, computerChoice] =
      fetchUserComputerSelection(); /* prompts and fetches input/selection */
    // play a round
    const roundResult = playRound(
      userChoice,
      computerChoice
    ); /* takes in input and declares result statement */
    round++; /* increments round from 0 till it matches i < 5 */

    // win - lose - tie criteria
    if (roundResult.includes(win)) {
      userScore++;
    } else if (roundResult.includes(lose)) {
      computerScore++;
    } else roundResult.includes(tie);

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
