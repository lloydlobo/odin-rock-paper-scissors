/* eslint-disable no-console */
/* $ ./node_modules/.bin/eslint --fix src/js/app.js */

/* declare and initialize const variables => always const before let */
// get DOM elements by id
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const dataScoreSpanUser = document.querySelector('[data-user-score]');
const dataScoreSpanComputer = document.querySelector('[data-computer-score]');

const roundsSelections = document.getElementById('roundsSelections');
// select all buttons with class of buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');
// console.dir(btnPossibleChoices);
const delayResetGameTimeoutDuration = Number(3000); /* 3 seconds */

/* set btnPossibleChoices.length when !type: "traditional" */
// choices array to store all possible choices
const choices = [
  {
    name: 'rock',
    gameType: ['twoPlayer'],
    image: '✊',
    index: 0,
    key: 'a',
    type: 'traditional',
    value: 'rock',
  },
  {
    name: 'paper',
    gameType: ['twoPlayer'],
    image: '✋',
    index: 1,
    key: 's',
    type: 'traditional',
    value: 'paper',
  },
  {
    name: 'scissors',
    gameType: ['twoPlayer'],
    image: '✌️',
    index: 2,
    key: 'd',
    type: 'traditional',
    value: 'scissors',
  },
];

// set result statement
const tieAllImage = '🤝'; /* https://emojipedia.org/heart-hands/ */
const winUserImage = '✨';
const winComputerImage = '🔥';
const winAll = `${tieAllImage} It's a Tie!`;
const winUser = `${winUserImage} You Won!`;
const winComputer = `${winComputerImage} Bot Won!`;

// * array of possible result statements
// const resultStatements = [
//   {
//     name: winUser,
//     beats: [1, 2],
//     class: 'win',
//     gameType: 'twoPlayer',
//     image: '<img src="images/win.png" alt="win">',
//     index: 0,
//     type: ['traditional'],
//     value: 1,
//     who: 'user',
//   },
//   {
//     name: winComputer,
//     beats: [0, 2],
//     class: 'lose',
//     gameType: 'twoPlayer',
//     image: '<img src="images/lose.png" alt="lose">',
//     index: 1,
//     type: ['traditional'],
//     value: -1,
//     who: 'computer',
//   },
//   {
//     name: winAll,
//     beats: [0, 1, 2],
//     class: 'tie',
//     gameType: 'twoPlayer',
//     image: '<img src="images/tie.png" alt="tie">',
//     index: 2,
//     type: ['traditional'],
//     value: 0,
//     who: 'tie',
//   },
// ];

// declare `let` variables
let userChoice; /* "temporal dead zone" (TDZ) */
let userChoiceValue;
let userChoiceResults;

// -----------------------------------------------------------------------------

/* 3 buttons, Math.floor() returns Math.random() to the nearest +ve integer */
// * Function to generate computer's random integer => 0<= i <=2
const computerChoice = () => {
  const randomNumber = Math.random();
  const numberOfButtons = btnPossibleChoices.length;
  const randomChoiceNumber = randomNumber * numberOfButtons;
  const randomChoice = Math.floor(randomChoiceNumber);

  return randomChoice;
};

// * Function to Filter choices array by user's choice
const fetchUserChoice = () => {
  choices.forEach((choice) => {
    if (userChoiceValue.includes(choice.name || choice.key)) {
      userChoice = choice.image;
      const userChoiceIndex = choice.index;
      userChoiceResults = [userChoice, userChoiceIndex];
      return userChoiceResults;
    }
    return userChoiceResults;
  });
};

// * Updates score with each win
const addScoreUpdate = (dataScoreSpan) => {
  const addScoreUpdateProperty = dataScoreSpan;
  addScoreUpdateProperty.textContent = parseInt(dataScoreSpan.textContent, 10) + 1;
};

// adds new paragraph choice emoji to DOM /* this can go at the top */
const roundResultInsert = document.createElement('p'); // create a new <p> element

// convert to function
/* const insertRoundResult = (roundResultInsert) => {
  roundResultInsert.textContent = userChoice;
  roundResultInsert.textContent = winAll;
  resultDisplay.appendChild(roundResultInsert);
}; */

// * Declare result of a single round
const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  const choicesArrayLength = choices.length;
  const choiceIndexIsSame = userChoiceIndex === computerChoiceIndex;
  const choiceIndexUserModulo = (userChoiceIndex + 1) % choicesArrayLength;
  const choiceIndexComputerWins = choiceIndexUserModulo === computerChoiceIndex;

  if (choiceIndexIsSame) {
    roundResultInsert.textContent = winAll;
    resultDisplay.appendChild(roundResultInsert);
    return 'tie';
  }
  if (choiceIndexComputerWins) {
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
    addScoreUpdate(dataScoreSpanComputer);
    return 'computer';
  }
  if (!choiceIndexComputerWins) {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
    addScoreUpdate(dataScoreSpanUser);
    return 'user';
  }
  return 'error';
};

// * Function => Adds a new round result to the DOM

const playRound = () => {
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');
  // Run the random computer choice generator ONLY ONCE HERE
  const computerChoices = choices[computerChoice()];
  // Retrieve results & map to computer's random number with choices[] array
  const computerChoiceResults = [computerChoices.image, computerChoices.index];
  // Define the computer results image and index with choices[] array
  const computerChoiceIndex = computerChoiceResults[1];
  userChoicePara.textContent = userChoice;
  userChoicePara.classList.add('card__choice-result__choice');
  // add text content & classList 'card__choice-result__choice'
  computerChoicePara.textContent = choices[computerChoiceIndex].image;
  computerChoicePara.classList.add('card__choice-result__choice');
  // Insert DOM result elements content <p> before the last <p>
  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild,
  );
  resultDisplay.textContent = `${userChoiceResults[0]} vs ${computerChoiceResults[0]}`;

  return roundResult(userChoiceResults[1], computerChoiceResults[1]);
};

// function to disable buttons when game is over
function btnDisableBtnPossibleChoices() {
  btnPossibleChoices.forEach((btnPossibleChoice) => {
    const btnToDisable = btnPossibleChoice;
    btnToDisable.disabled = true;
  });
}

// function enables buttons after resetGame()
function btnEnableBtnPossibleChoices() {
  btnPossibleChoices.forEach((btnPossibleChoice) => {
    const btnToEnable = btnPossibleChoice;
    btnToEnable.disabled = false;
  });
}

// Function displays the user when the next game will begin
// It enables the disabled button choices again (avoids spamming)
const countdownTimer = () => {
  const countdownTimerStartGame = document.createElement('p');
  countdownTimerStartGame.textContent = '3';
  countdownTimerStartGame.classList.add('countdownTimerStartGame');
  resultDisplay.appendChild(countdownTimerStartGame);
  setTimeout(() => {
    countdownTimerStartGame.textContent = '2';
  }, 1000);
  setTimeout(() => {
    countdownTimerStartGame.textContent = '1';
  }, 2000);
  setTimeout(() => {
    countdownTimerStartGame.textContent = 'GO!';
  }, 3000);
  setTimeout(() => {
    countdownTimerStartGame.textContent = '';
  }, 4000);
  setTimeout(() => {
    btnEnableBtnPossibleChoices(); // enables the disabled button choices again
  }, 5000);
};

// function countdownTimerToResetGame() {
//   const countdownTimerRestartGame = document.createElement('p');
//   countdownTimerRestartGame.textContent = '3';
//   countdownTimerRestartGame.classList.add('countdownTimerRestartGame');
//   resultDisplay.appendChild(countdownTimerRestartGame);
//   setTimeout(() => {
//     countdownTimerRestartGame.textContent = '3';
//   }, 1000);
//   setTimeout(() => {
//     countdownTimerRestartGame.textContent = '2';
//   }, 2000);
//   setTimeout(() => {
//     countdownTimerRestartGame.textContent = '1';
//   }, 3000);
//   setTimeout(() => {
//     countdownTimerRestartGame.textContent = '0';
//   }, 4000);
//   setTimeout(() => {
//     countdownTimerRestartGame.textContent = '';
//   }, 5000);
// }

// * reset the game when <select> element roundSelections is changed
const resetGame = () => {
  [
    userChoiceDisplay.textContent,
    computerChoiceDisplay.textContent,
    resultDisplay.textContent,
  ] = ''; // reset the appended <p> elements content
  dataScoreSpanUser.textContent = '0';
  dataScoreSpanComputer.textContent = '0';
  // add a countdown countdownTimerStartGame
  // Count as the Game restarts again
  roundResultInsert.textContent = '';
  // countdownTimerToResetGame();
  countdownTimer();
};

// * scoreToWin for game to end
let scoreToWin = Number(roundsSelections.value);

// get rounds value set by the user (default is 5)
roundsSelections.addEventListener('change', (e) => {
  scoreToWin = Number(e.target.value);
  console.log('🚀 ~ scoreToWin', scoreToWin);
  resetGame();
  return scoreToWin;
});

// Function to set timeout to resetGame()
function delayResetGameTimeOut() {
  setTimeout(() => {
    resetGame();
    console.log('Game was reset');
  }, delayResetGameTimeoutDuration);
}

function roundResultInsertWinGameUser() {
  roundResultInsert.textContent = winUser;
}

function roundResultInsertWinGameComputer() {
  roundResultInsert.textContent = winComputer;
}

// * Function => grab the buttons & for each choice - listen to event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value; /* value || key */
  fetchUserChoice(); /* filters the userChoice to match the choices array */
  playRound(); /* creates DOM elements after fetching */

  // game win conditions
  const dataScoreSpanInnerTextUser = dataScoreSpanUser.innerText;
  const dataScoreSpanInnerTextComputer = dataScoreSpanComputer.innerText;
  const scoreFinalUser = Number(dataScoreSpanInnerTextUser);
  const scoreFinalComputer = Number(dataScoreSpanInnerTextComputer);
  const winGameUser = scoreFinalUser === scoreToWin;
  const winGameComputer = scoreFinalComputer === scoreToWin;

  // * final winner — if conditionals
  if (winGameUser) {
    roundResultInsertWinGameUser();
    btnDisableBtnPossibleChoices();
    // resultDisplay.textContent = winUser;
    delayResetGameTimeOut();
  } else if (winGameComputer) {
    roundResultInsertWinGameComputer();
    btnDisableBtnPossibleChoices();
    // resultDisplay.textContent = winComputer;
    roundResultInsert.textContent = winComputer;
    delayResetGameTimeOut();
  }
  console.log(`user score: ${dataScoreSpanUser.innerText} computer score: ${dataScoreSpanComputer.innerText}`);
  console.log('🚀 ~ scoreFinalUser', scoreFinalUser);
  console.log('🚀 ~ scoreFinalComputer', scoreFinalComputer);
  console.log('🚀 ~ scoreToWin', scoreToWin);
}));

// const playGame = () => {
//   const scoreFinalUser = Number(dataScoreSpanInnerTextUser);
//   const scoreFinalComputer = Number(dataScoreSpanInnerTextComputer);
//   console.log('🚀 ~ scoreFinalUser', scoreFinalUser);
//   console.log('🚀 ~ scoreFinalComputer', scoreFinalComputer);
//   console.log('🚀 ~ scoreToWin', scoreToWin);
//   // final winner if conditionals
//   if (scoreFinalUser === scoreToWin) {
//     console.log('🚀 ~ (scoreFinalUser === scoreToWin)', (scoreFinalUser === scoreToWin));
//     btnDisableBtnPossibleChoices();
//     resultDisplay.textContent = winUser;
//     setTimeout(() => {
//       resetGame();
//     }, 3000);
//   } else if (dataScoreSpanComputer.textContent === scoreToWin) {
//     btnDisableBtnPossibleChoices();
//     resultDisplay.textContent = winComputer;
//     setTimeout(() => {
//       resetGame();
//     }, 3000);
//   } else {
//     btnDisableBtnPossibleChoices();
//     resultDisplay.textContent = winAll;
//     setTimeout(() => {
//       resetGame();
//     }, 3000);
//   }
// };
// playGame();

// reset game when rounds are over
/* const roundsNumber = parseInt(rounds); const roundsArray = [];
  for (let i = 0; i < roundsNumber; i++) {roundsArray.push playRound());} */

// -----------------------------------------------------------------------------
// 20220423192830
// ! main.js version1
// * function calls statements
// function declareGameWinner() {
//   const win = 'win';
//   const lose = 'lose';
//   const tie = 'tie';
//   return [win, lose, tie];
// }

// game logic and plays 5 rounds of rock paper scissors
// function game() {
//   const scoreFinalUser = dataScoreSpanInnerTextUser;
//   const scoreFinalComputer = dataScoreSpanInnerTextComputer;
//   // eslint-disable-next-line no-console
//   console.log('🚀 ~ scoreFinalUser', scoreFinalUser);
//   // eslint-disable-next-line no-console
//   console.log('🚀 ~ scoreFinalComputer', scoreFinalComputer);
//   let round = 0;

//   for (let i = 0; i < 5; i += 1) {
//     const [userChoice, computerChoice] = fetchUserComputerSelection();
//     const roundResult = playRound(userChoice, computerChoice);
//     round += 1;
//     const [win, lose, tie] = declareStatement();
//     if (roundResult.includes(win)) {
//       scoreFinalUser += 1;
//     } else if (roundResult.includes(lose)) {
//       scoreFinalComputer += 1;
//     } else roundResult.includes(tie);
//     console.log(`${gameRoundResult}`);
//   }
//   const successUser = `Game over! You succeeded!
// \nFinal score:\nuserScore: ${scoreFinalUser} to scoreFinalComputer: ${scoreFinalComputer}`;
//   const successComputer = `Game over! Computer succeeded!\nFinal score:
// \nuserScore: ${scoreFinalUser} to scoreFinalComputer: ${scoreFinalComputer}`;
//   const successUserComputer = `Game over! It's a tie! Everyone succeeded!
//    \nFinal score:\nuserScore: ${scoreFinalUser} to scoreFinalComputer: ${scoreFinalComputer}`;

//   if (scoreFinalUser > scoreFinalComputer) {
//     resultDisplay.textContent = successUser;
//   } else if (scoreFinalUser < scoreFinalComputer) {
//     resultDisplay.textContent = successComputer;
//   } else if (scoreFinalUser === scoreFinalComputer) {
//     resultDisplay.textContent = successUserComputer;
//   }
//   return resultDisplay.textContent;
// }

// game();

// restart game
// function restartGame() {
//   const promptMessageRestart = 'Would you like to play again? (y/n)';
//   const reset = prompt(promptMessageRestart, 'y');
//   if (reset === 'y') {
//     game();
//     restartGame(); /* prompts user again when game() ends 2nd time */
//   } else {
//     console.log('Thanks for playing!');
//   }
// }
// restartGame();

// function to play a game of round = rounds from user input in #roundsSelections
// const game = () => {
//   let round = 0;
//   let scoreFinalUser = 0;
//   let scoreFinalComputer = 0;
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     round++;
//     if (round % 2 === 0) {
//       scoreFinalUser++;
//     } else {
//       scoreFinalComputer++;
//     }
//   }
// };

// -----------------------------------------------------------------------------
/* const computerChoiceResults = [
        choices[computerChoice()].image,
        choices[computerChoice()].index,
      ]; */

// const computerChoiceIndexResult = choices[computerChoice()].index;
// const computerChoiceImageResult = choices[computerChoice()].image;

// resultDisplay.insertBefore(roundResultInsert, resultDisplay.firstChild); /* **** */

//  --------------------------------------------------------------------

/* function game() {
    const rounds = roundsSelections.value;
    rounds = 3;
    for (let i = 0; i < rounds; i++) {
      playRound();
    }
  } */

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt#a_stricter_parse_function */
/* function parseInt(string: string, radix?: number): number */
/* if radix is not specified, it defaults to base 10 (decimal) else base 16 (hexadecimal) */
/* A value between 2 and 36 that specifies the base of the number in string.
    If this argument is not supplied, strings with a prefix of '0x' are considered hexadecimal.
    All other strings are considered decimal. */
