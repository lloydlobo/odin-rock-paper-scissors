// eslint-disable-next-line no-console
// console.log('Gloria In Excelsis Deo!');
// ESLint run command /* $ `./node_modules/.bin/eslint --fix src/js/app.js` */

// get DOM elements by id /* declare and initialize const variables => always const before let */
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const roundsSelections = document.getElementById('roundsSelections');

const dataScoreSpanUser = document.querySelector('[data-user-score]');
const dataScoreSpanComputer = document.querySelector('[data-computer-score]');

// select all buttons with class of .buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');
// adds new paragraph choice emoji to DOM /* this can go at the top */
const roundResultInsert = document.createElement('p'); // create a new <p> element
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
// 'a' = rock, 's' = paper, 'd' = scissors
let keydownPossibleChoicesKey;
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

/*
! fetchUserChoice func seems to be an hindrance
! it only runs when a button is pressed
! Take away the power btnPossibleChoices has. -- stop complicating this
*/

// assigns user choice an image and returns userChoiceResults
function userChoiceFilterChoices(choice) {
  userChoice = choice.image;
  const userChoiceIndex = choice.index;
  userChoiceResults = [userChoice, userChoiceIndex];
}

// ! bug here - it's only accepting whatever is clicked first
// * Function to Filter choices array by user's choice
function fetchUserChoice() {
  choices.forEach((choice) => {
    if (userChoiceValue === (choice.name)) {
      userChoiceFilterChoices(choice);
      return userChoiceResults;
    }
    // if (keydownPossibleChoicesKey === (choice.key)) {
    //   userChoiceFilterChoices(choice);
    //   return userChoiceResults;
    // }
    return userChoiceResults;
  });
}

// function to filter choices array with window.addeventlistener keydown
function fetchKeydownPossibleChoicesKey() {
  choices.forEach((choice) => {
    if (keydownPossibleChoicesKey === (choice.key)) {
      userChoiceFilterChoices(choice);
      return userChoiceResults;
    }
    return userChoiceResults;
  });
}

// * Updates score with each win
const addScoreUpdate = (dataScoreSpan) => {
  const addScoreUpdateProperty = dataScoreSpan;
  addScoreUpdateProperty.textContent = parseInt(dataScoreSpan.textContent, 10) + 1;
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
  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild,
  );
  resultDisplay.textContent = `${userChoiceResults[0]} vs ${computerChoiceResults[0]}`;

  return roundResult(userChoiceResults[1], computerChoiceResults[1]);
}

// * Function => Adds a new round result to the DOM
const playRound = () => {
  const { userChoicePara, computerChoicePara } = createChoiceParas();
  const { computerChoiceIndex, computerChoiceResults } = getComputerResultFromChoices();
  createChoiceParasTextContent(userChoicePara, computerChoicePara, computerChoiceIndex);
  return displayChoicesContentInDOM(userChoicePara, computerChoicePara, computerChoiceResults);
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

// * scoreToWin for game to end
let scoreToWin = Number(roundsSelections.value);

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

// Function to insert result when user wins
function roundResultInsertWinGameUser() {
  roundResultInsert.textContent = winUser;
}

// Function to insert result when computer wins
function roundResultInsertWinGameComputer() {
  roundResultInsert.textContent = winComputer;
}

// pass this function when the user clicks a button
const keydownController = new AbortController();
const keydownAbortDisableBtn = document.createElement('button');
keydownAbortDisableBtn.textContent = 'Disable Keyboard Shortcuts';
keydownAbortDisableBtn.classList.add('keydownAbortDisableBtn');

// OR disable keydown inputs after score is reached
const keydownAbort = () => {
  keydownController.abort();
};

// ****
// **** GUI FUNCTION
// ****

// Function declare the winner of the game
function declareGameWinner() {
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
    keydownAbort();
    // resultDisplay.textContent = winUser;
    delayResetGameTimeOut();
  } else if (winGameComputer) {
    roundResultInsertWinGameComputer();
    btnDisableBtnPossibleChoices();
    keydownAbort();
    // resultDisplay.textContent = winComputer;
    roundResultInsert.textContent = winComputer;
    delayResetGameTimeOut();
  }
}

// ****
// ****
// **** PARENT FUNCTION
// ****
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

// **** Functions listens to keydown or keyboard key presses
window.addEventListener('keydown', (event) => {
  keydownPossibleChoicesKey = event.key;
  keydownPossibleChoicesKey = keydownPossibleChoicesKey.toLowerCase();
  playGame();
}, AbortSignal);

// **** Function => grab the buttons & for each choice - listen to event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value; /* value || key */
  playGame();
}));

// -----------------------------------------------------------------------------
// ---------------------------------FIN-----------------------------------------
// -----------------------------------------------------------------------------
