// computer picks randomly from rock, paper, and scissors
function computerPlay() {
  const rockPaperScissors = ["rock", "paper", "scissors"];
  const randomNumber = Math.random() * rockPaperScissors.length;
  computerRandom = rockPaperScissors[Math.floor(randomNumber)];
  return computerRandom;
}

// user picks rock, paper, or scissors
function userPlay() {
  userChoice = prompt("Pick rock, paper, or scissors");
  userChoice = userChoice.toLowerCase();
  computerChoice = computerPlay();
  return userChoice;
}

// compare user and computer choices
function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose! Paper beats rock.";
    } else {
      return "You win! Rock beats scissors.";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lose! Scissors beats paper.";
    } else {
      return "You win! Paper beats rock.";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose! Rock beats scissors.";
    } else {
      return "You win! Scissors beats paper.";
    }
  }
}

// includes "you win" or "you lose"
function game() {
  let userScore = 0;
  let computerScore = 0;
  let round = 0;
  const win = "win";
  const lose = "lose";
  const tie = "tie";
  for (let i = 0; i < 5; i++) {
    userPlay();
    const roundResult = playRound(userChoice, computerRandom);
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

// reset game
function resetGame() {
  const reset = prompt("Would you like to play again? (y/n)");
  if (reset === "y") {
    game();
  } else {
    console.log("Thanks for playing!");
  }
}
resetGame();
