const btnStartGame = document.getElementById("btnStartGame");
const btnSettings = document.getElementById("btnSettings"); /* opens modal */
const dialogModalGame = document.getElementById("dialogModalGame");
const gameUpdateOutput = document.querySelector("output");
const optionSelectDifficulty = dialogModalGame.querySelector("select");
// const confirmBtn = dialogModalGame.querySelector("#confirmBtn");

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof dialogModalGame.showModal !== "function") {
  dialogModalGame.hidden = true;
  /* a fallback script to allow this dialog/form to function
     for legacy browsers that do not support <dialog>
     could be provided here.
  */
}
// "Update details" button opens the <dialog> modally
btnSettings.addEventListener("click", function onOpen() {
  if (typeof dialogModalGame.showModal === "function") {
    dialogModalGame.showModal();
  } else {
    gameUpdateOutput.value =
      "Sorry, the <dialog> API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
optionSelectDifficulty.addEventListener("change", function onSelect(e) {
  confirmBtn.value = optionSelectDifficulty.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
dialogModalGame.addEventListener("close", function onClose() {
  gameUpdateOutput.value =
    dialogModalGame.returnValue + " button clicked - " + new Date().toString();
});

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

// computer picks randomly from rock, paper, and scissors
function computerPlay() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomNumber = Math.random() * rockPaperScissors.length;
  const computerRandom = rockPaperScissors[Math.floor(randomNumber)];
  return computerRandom;
}

// if user clicks btnRock, btnPaper, or btnScissors, then the value of the button is returned
function chooseButton() {
  let btnRockClick = btnRock.addEventListener("click", function (e) {
    const userChoice = e.target.value;
    console.log(userChoice);
  });
  let btnPaperClick = btnPaper.addEventListener("click", function (e) {
    const userChoice = e.target.value;
    console.log(userChoice);
  });
  let btnScissorsClick = btnScissors.addEventListener("click", function (e) {
    const userChoice = e.target.value;
    console.log(userChoice);
  });
  let result = [btnRockClick, btnPaperClick, btnScissorsClick];
  return result;
}

// fetches user and computer choices values
function fetchUserComputerSelection() {
  const userChoice = chooseButton();
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
    const [win, lose, tie] = declareStatement();
    if (roundResult.includes(win)) {
      userScore++;
    } else if (roundResult.includes(lose)) {
      computerScore++;
    } else roundResult.includes(tie);
    const gameRoundResult = `Round ${round}: ${roundResult}\nYou chose ${userChoice} Computer chose ${computerChoice}\nUser score: ${userScore} Computer score: ${computerScore}`;
    console.log(`${gameRoundResult}`);
  }
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

const btnRestartGame = document.getElementById("btnRestartGame");

// restart game
const restart = btnRestartGame.addEventListener("click", function (e) {
  console.log(`You chose ${e.target.id}`);
  game();
  restartGame();
});

// function restartGame() {
//   outputBox.textContent = `Would you like to play again?`;
//   // const reset = prompt(promptMessageRestart, `y`);
//   //
//   if restart
//   else {
//     outputBox.textContent = "Thanks for playing!";
//   }
// }
restartGame();
