/* $ ./node_modules/.bin/eslint --fix src/js/app.js */

/* declare and intialize const variables => always const before let */

// set result statement
const winUser = 'You win';
const winComputer = 'Computer wins';
const winAll = "It's a tie! Everyone Wins!";
/* const tieAllImage = '🫶 '; */ /* https://emojipedia.org/heart-hands/ */

// get DOM elements by id
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
const dataUserScoreSpan = document.querySelector('[data-user-score]');
const dataComputerScoreSpan = document.querySelector('[data-computer-score]');

const roundsSelections = document.getElementById('roundsSelections');
// select all buttons with class of buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');

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
const resultStatements = [
  {
    name: winUser,
    beats: [1, 2],
    class: 'win',
    gameType: 'twoPlayer',
    image: '<img src="images/win.png" alt="win">',
    index: 0,
    type: ['traditional'],
    value: 1,
    who: 'user',
  },
  {
    name: winComputer,
    beats: [0, 2],
    class: 'lose',
    gameType: 'twoPlayer',
    image: '<img src="images/lose.png" alt="lose">',
    index: 1,
    type: ['traditional'],
    value: -1,
    who: 'computer',
  },
  {
    name: winAll,
    beats: [0, 1, 2],
    class: 'tie',
    gameType: 'twoPlayer',
    image: '<img src="images/tie.png" alt="tie">',
    index: 2,
    type: ['traditional'],
    value: 0,
    who: 'tie',
  },
];

// declare let variables
let userChoice; /* "temporal dead zone" (TDZ) */
let userChoiceValue;
let userChoiceResults;
// * scoreToWin for game to end
let scoreToWin = roundsSelections.value;
console.log('🚀 ~ scoreToWin', scoreToWin);
/* let userChoiceIndex; */

// -----------------------------------------------------------------------------

/* 3 btns, Math.floor() returns Math.random() to the nearest positive integer value */
// * Returns a random integer => 0<= i <=2
function computerChoice() {
  const randomNumber = Math.random();
  const randomChoice = Math.floor(randomNumber * btnPossibleChoices.length);
  return randomChoice;
}

// * Filter choices array by user's choice
function fetchUserChoice() {
  choices.forEach((choice) => {
    if (userChoiceValue.includes(choice.name || choice.key)) {
      userChoice = choice.image;
      const userChoiceIndex = choice.index;
      userChoiceResults = [userChoice, userChoiceIndex];

      return userChoiceResults;
    }
    return userChoiceResults;
  });
}

// adds new paragraph choice emoji to DOM /* this can go at the top */
const roundResultInsert = document.createElement('p'); // create a new <p> element

/* const createNewPara = () => {
  roundResultInsert.textContent = userChoice;
  resultDisplay.appendChild(roundResultInsert);
}; */

// ! this is breaking everything
function addScoreUpdate(dataScoreSpan) {
  const addScoreUpdateProperty = dataScoreSpan;
  addScoreUpdateProperty.textContent = parseInt(dataScoreSpan.textContent) + 1;
}

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
    addScoreUpdate(dataComputerScoreSpan);
    return 'computer';
  }
  if (!choiceIndexComputerWins) {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
    addScoreUpdate(dataUserScoreSpan);
    return 'user';
  }
  return 'error';
};

// increment the score for user & computer => addScoreUpdate(dataScoreSpan)

/* adds most recent choice history of both users */
// * Function => Adds a new round result to the DOM
const playRound = () => {
  // Create DOM result elements content <p>
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');

  // * Run the random computer choice generator ONLY ONCE HERE
  const computerChoices = choices[computerChoice()];

  // Retrieve results & map to computer's random number with choices[] array
  const computerChoiceResults = [computerChoices.image, computerChoices.index];

  // Define the computer results image and index with choices[] array
  /* const computerChoiceImage = computerChoiceResults[0]; */
  const computerChoiceIndex = computerChoiceResults[1];
  // ? would we need a forEach() loop here? if user's increase?

  // add text content & classList 'card__choice-result__choice'
  userChoicePara.textContent = userChoice;
  userChoicePara.classList.add('card__choice-result__choice');

  // ! todo think over it
  /* // add winnwe classList to the winner of the round()
  if (userChoiceIndex === computerChoiceIndex) {
    userChoicePara.classList.add('card__choice-result__choice--win');
  } else {
    computerChoicePara.classList.add('card__choice-result__choice--win');
  } */

  // add text content & classList 'card__choice-result__choice'
  computerChoicePara.textContent = choices[computerChoiceIndex].image;
  computerChoicePara.classList.add('card__choice-result__choice');
  // * Insert DOM result elements content <p> before the last <p>
  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild,
  );
  // * Display result in the DOM UI
  resultDisplay.textContent = `${userChoiceResults[0]} vs ${computerChoiceResults[0]}`;

  return roundResult(userChoiceResults[1], computerChoiceResults[1]);
};

// * reset the game when roundSelecions is changed
const resetGame = () => {
  // remove the appended <p> elements
  [userChoiceDisplay.innerHTML, computerChoiceDisplay.innerHTML, resultDisplay.textContent] = '';
  // reset the score
  [dataUserScoreSpan.textContent, dataComputerScoreSpan.textContent] = 0;
  // reset the round
  roundResultInsert.textContent = '';
};

// * Function => grab the buttons & for each choice - listen to event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value; /* value || key */

  // console.clear();
  // * filters the userChoice to match the choices array
  fetchUserChoice();
  // ? todo think about it => playRound() could go in playGame()
  // ? but playGame() is for calculating the score and reseting the game
  // * play round
  playRound();
}));

const playGame = () => {
  // * play rounds
  for (let i = 0; i < scoreToWin; i += 1) {
    // add a if statment here for dataScoreSpan === scoreToWin
    playRound();
    if (dataUserScoreSpan.textContent === scoreToWin) {
      resultDisplay.textContent = winUser;
      break;
    } else if (dataComputerScoreSpan.textContent === scoreToWin) {
      resultDisplay.textContent = winComputer;
      break;
    } else {
      resultDisplay.textContent = winAll;
    }
  }
  resetGame();
};

// get rounds value set by the user (default is 5)
roundsSelections.addEventListener('change', (e) => {
  scoreToWin = e.target.value;
  console.log('🚀 ~ scoreToWin', scoreToWin);
  // * reset the game when scoreToWin value is changed
  resetGame();
  return scoreToWin;
});

// reset game when rounds are over
/* const roundsNumber = parseInt(rounds); const roundsArray = [];
for (let i = 0; i < roundsNumber; i++) {roundsArray.push playRound());} */

// -----------------------------------------------------------------------------

// function to play a game of round = rounds from user input in #roundsSelections
// const game = () => {
//   let round = 0;
//   let userScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     playRound();
//     round++;
//     if (round % 2 === 0) {
//       userScore++;
//     } else {
//       computerScore++;
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
