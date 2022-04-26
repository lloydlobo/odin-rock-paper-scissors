// ESLint run command /* $ `./node_modules/.bin/eslint --fix src/js/app.js` */
/* declare and initialize const variables => always const before let */
// get DOM elements by id
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');

const dataScoreSpanUser = document.querySelector('[data-user-score]');
const dataScoreSpanComputer = document.querySelector('[data-computer-score]');

const roundsSelections = document.getElementById('roundsSelections');

// select all buttons with class of .buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice'); // console.dir(btnPossibleChoices);

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

const resultStatementsObject = resultStatements.reduce(
  (acc, curr) => {
    acc[curr.value] = curr;
    return acc;
  },
  {},
);

export default {
  choices,
  delayResetGameTimeoutDuration,
  resultStatements,
  resultStatementsObject,
  userChoiceDisplay,
  computerChoiceDisplay,
  resultDisplay,
  dataScoreSpanUser,
  dataScoreSpanComputer,
  roundsSelections,
  btnPossibleChoices,
};
