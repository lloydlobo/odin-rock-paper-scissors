// console.log('Gloria In Excelsis Deo!');
// ESLint run command /* $ `./node_modules/.bin/eslint --fix src/js/app.js` */

/* declare and initialize const variables => always const before let */
// get DOM elements by id
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const roundsSelections = document.getElementById('roundsSelections');
const dataScoreSpanUser = document.querySelector('[data-user-score]');
const dataScoreSpanComputer = document.querySelector('[data-computer-score]');
// select all buttons with class of .buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');

// adds new paragraph choice emoji to DOM
const roundResultInsert = document.createElement('p');
const delayResetGameTimeoutDuration = Number(3000); /* 3 seconds */

// set result statement
const tieAllImage = '🤝'; /* https://emojipedia.org/heart-hands/ */
const winUserImage = '✨';
const winComputerImage = '🔥';
const winAll = `${tieAllImage} It's a Tie!`;
const winUser = `${winUserImage} You Won!`;
const winComputer = `${winComputerImage} Bot Won!`;

// * Array to store all possible choices
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

// declare `let` variables
let userChoice; /* "temporal dead zone" (TDZ) */
let userChoiceValue;
let userChoiceResults;
let keydownPossibleChoicesKey; // 'a' = rock, 's' = paper, 'd' = scissors
let scoreToWin = Number(roundsSelections.value);
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

// Assigns user choice an image and returns userChoiceResults
function userChoiceFilterChoices(choice) {
  userChoice = choice.image;
  const userChoiceIndex = choice.index;
  userChoiceResults = [userChoice, userChoiceIndex];
}

// * Function to Filter choices array by user's choice
function fetchUserChoice() {
  choices.forEach((choice) => {
    if (userChoiceValue === (choice.name)) {
      userChoiceFilterChoices(choice);

      return userChoiceResults;
    }

    return userChoiceResults;
  });
}

// Pass this function when the user clicks a button
const keydownController = new AbortController();
const keydownAbortDisableBtn = document.createElement('button');
keydownAbortDisableBtn.textContent = 'Disable Keyboard Shortcuts';
keydownAbortDisableBtn.classList.add('keydownAbortDisableBtn');

// OR disable keydown inputs after score is reached
const keydownAbort = () => {
  keydownController.abort();
};

// function to filter choices array with window.addeventlistener keydown
function fetchKeydownPossibleChoicesKey() {
  choices.forEach((choice) => {
    if (keydownPossibleChoicesKey === (choice.key)) {
      userChoiceFilterChoices(choice);

      return userChoiceResults;
    } if (keydownPossibleChoicesKey !== (choice.key)) {
      // stop the function from running event listener keydown
      keydownAbort(); // ! /* bug */
    }

    return userChoiceResults;
  });
}

// * Updates score with each win
const addScoreUpdate = (dataScoreSpan) => {
  const addScoreUpdateProperty = dataScoreSpan;
  addScoreUpdateProperty.textContent = parseInt(
    dataScoreSpan.textContent,
    10,
  ) + 1;
};

// * Declare result of a single round
const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  // Function to insert under the round result in the DOM
  const roundResultTextAppendWinner = (event) => {
    roundResultInsert.textContent = event;
    resultDisplay.appendChild(roundResultInsert);
  };

  const choicesArrayLength = choices.length;
  const choiceIndexUserModulo = (userChoiceIndex + 1) % choicesArrayLength;
  const choiceIndexComputerWins = choiceIndexUserModulo === computerChoiceIndex;
  const choiceIndexIsSame = userChoiceIndex === computerChoiceIndex;

  if (choiceIndexIsSame) {
    roundResultTextAppendWinner(winAll);
    return 'tie';
  }
  if (choiceIndexComputerWins) {
    roundResultTextAppendWinner(winComputer);
    addScoreUpdate(dataScoreSpanComputer);
    return 'computer';
  }
  if (!choiceIndexComputerWins) {
    roundResultTextAppendWinner(winUser);
    addScoreUpdate(dataScoreSpanUser);
    return 'user';
  }
  return 'error';
};

// Function to insert user and computer choices into DOM
function createChoiceParas() {
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');
  return { userChoicePara, computerChoicePara };
}

// Function to create text content for choiceParas
function createChoiceParasTextContent(userChoicePara, computerChoicePara, computerChoiceIndex) {
  const [
    createChoiceUser,
    createChoiceComputer,
  ] = [userChoicePara, computerChoicePara];

  createChoiceUser.textContent = userChoice;
  createChoiceComputer.textContent = choices[computerChoiceIndex].image;

  userChoicePara.classList.add('card__choice-result__choice');
  createChoiceComputer.classList.add('card__choice-result__choice');
}
// * Function to get computer's choice
function getComputerResultFromChoices() {
  // Run the random computer choice generator ONLY ONCE HERE
  const computerChoices = choices[computerChoice()];
  // Retrieve results & map to computer's random number with choices[] array
  const computerChoiceResults = [computerChoices.image, computerChoices.index];
  // Define the computer results image and index with choices[] array
  const computerChoiceIndex = computerChoiceResults[1];
  return { computerChoiceIndex, computerChoiceResults };
}

// * Function to display results
function displayChoicesContentInDOM(userChoicePara, computerChoicePara, computerChoiceResults) {
  // Insert DOM result elements content <p> before the last <p>
  userChoiceDisplay.insertBefore(
    userChoicePara,
    userChoiceDisplay.firstChild,
  );
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild,
  );
  resultDisplay.textContent = `
    ${userChoiceResults[0]} vs ${computerChoiceResults[0]}
  `;

  return roundResult(userChoiceResults[1], computerChoiceResults[1]);
}

// * Function => Adds a new round result to the DOM
const playRound = () => {
  const { userChoicePara, computerChoicePara } = createChoiceParas();
  const { computerChoiceIndex, computerChoiceResults } = getComputerResultFromChoices();

  createChoiceParasTextContent(userChoicePara, computerChoicePara, computerChoiceIndex);

  return displayChoicesContentInDOM(userChoicePara, computerChoicePara, computerChoiceResults);
};

// Disable buttons when game is over to avoid multiple clicks
function btnDisableBtnPossibleChoices() {
  btnPossibleChoices.forEach((btnPossibleChoice) => {
    const btnToDisable = btnPossibleChoice;
    btnToDisable.disabled = true;
  });
}

// Enable buttons after game is reset to allow user to play again
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
  // Enable the disabled button choices again
  setTimeout(() => {
    btnEnableBtnPossibleChoices();
  }, 5000);
};

// * reset the game when <select> element roundSelections is changed
const resetGame = () => {
  [
    userChoiceDisplay.textContent,
    computerChoiceDisplay.textContent,
    resultDisplay.textContent,
    roundResultInsert.textContent,
  ] = '';
  [
    dataScoreSpanUser.textContent,
    dataScoreSpanComputer.textContent,
  ] = ['0', '0'];
  // Count as the Game restarts again
  countdownTimer();
};

// get rounds value set by the user (default is 5)
roundsSelections.addEventListener('change', (e) => {
  scoreToWin = Number(e.target.value);
  resetGame();

  return scoreToWin;
});

// Function to set timeout to resetGame()
function delayResetGameTimeOut() {
  setTimeout(() => {
    resetGame();
  }, delayResetGameTimeoutDuration);
}

// ? This remains a mystery to me
// ? gameRoundResultInsertWinner() doesn't need this function
// ? but only the method
// Function to insert result when either user or computer wins
const roundResultInsertWinGamer = (winner) => {
  roundResultInsertWinGamer.textContent = winner;
};

// ****
// **** GUI FUNCTIONS
// ****

// function to disable buttons and keydown inputs and resetGame()
function resetGameDisableBtnAndKeydown() {
  btnDisableBtnPossibleChoices();
  keydownAbort();
  delayResetGameTimeOut();
}

// function to display & insert result when either winner wins
function gameRoundResultInsertWinner(winner) {
  //  roundResultInsertWinGamer.textContent = winner;
  roundResultInsertWinGamer(winner);
  resultDisplay.textContent = winner;
}

// * Function declare the winner of the game
function declareGameWinner() {
  const scoreFinalUser = Number(dataScoreSpanUser.innerText);
  const scoreFinalComputer = Number(dataScoreSpanComputer.innerText);
  // if conditions are met, then the game is over
  const winGameUser = scoreFinalUser === scoreToWin;
  const winGameComputer = scoreFinalComputer === scoreToWin;
  if (winGameUser) {
    gameRoundResultInsertWinner(winUser);
    resetGameDisableBtnAndKeydown();
  } else if (winGameComputer) {
    gameRoundResultInsertWinner(winComputer);
    resetGameDisableBtnAndKeydown();
  }
}

// ****
// **** FUNCTION RUNNER
// ****

// * Plays the game as user clicks a button or presses a key
/**
 * @param  {} fetchUserChoice()
 * @param  {} fetchKeydownPossibleChoicesKey()
 * @param  {} playRound()
 * @param  {} declareGameWinner()
 */
function playGame() {
  // filters the userChoice to match the choices array
  fetchUserChoice();
  fetchKeydownPossibleChoicesKey();

  // Adds a new round result to the DOM
  playRound();
  declareGameWinner();
}

// ****
// **** EVENT LISTENERS
// ****

// * Listens to keydown or keyboard key presses
window.addEventListener('keydown', (event) => {
  keydownPossibleChoicesKey = event.key;
  keydownPossibleChoicesKey = keydownPossibleChoicesKey.toLowerCase();

  playGame();
}, AbortSignal);

// * Grab the buttons & for each choice & Listen to click event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value;

  playGame();
}));

// ---------------------------------FIN-----------------------------------------
