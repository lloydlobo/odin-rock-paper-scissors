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
const allDataScoreSpans = document.querySelectorAll('[data-score]');
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');

// ? /* set btnPossibleChoices.length when !type: "traditional" */
// * GLOBAL choices array to store all possible choices
const choices = [
  {
    name: 'rock',
    image: '✊',
    key: 'a',
    value: 'rock',
    type: 'traditional',
    index: 0,
  },
  {
    name: 'paper',
    image: '✋',
    key: 's',
    value: 'paper',
    type: 'traditional',
    index: 1,
  },
  {
    name: 'scissors',
    image: '✌️',
    key: 'd',
    value: 'scissors',
    type: 'traditional',
    index: 2,
  },
];

// declare let variables
let userChoice; /* "temporal dead zone" (TDZ) */
let userChoiceValue;
let userChoiceResults;
// * scoreToWin for game to end (default=5) /* user selects this from the GUI / DOM */
let scoreToWin = roundsSelections.value;
console.log('🚀 ~ scoreToWin', scoreToWin);
/* let userChoiceIndex; */

// -----------------------------------------------------------------------------

/* 3 btns, Math.floor() returns Math.random()
    to the nearest positive integer value */
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
      return userChoiceResults; // ? why is this here?
    }
    return userChoiceResults; // ? why is this here?
  });
}

// adds new paragraph choice emoji to DOM /* this can go at the top */

/* const createNewPara = () => {
  roundResultInsert.textContent = userChoice;
  resultDisplay.appendChild(roundResultInsert);
}; */

/* used as a string statement */
// creates a new <p> element for the round result
const roundResultInsert = document.createElement('p'); // create a new <p> element

// A stricter parse function
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/
    Global_Objects/parseInt#a_stricter_parse_function */
/* function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value)
  } else {
    return NaN
  }
}

// 20220422123410

// let b;
// let x;

// function test(a) {
//   let valueTest = a;
//   if (valueTest <= 9) {
//     b += valueTest;
//     x = parseInt(valueTest, b); /* add b as radix */
//     console.log(x);
//   } else if (valueTest >= 10) {
//     b = 10;
//     x = parseInt(valueTest, b); /* add b as radix */
//     console.log(x);
//   }
//   return x;
// }
// a = 7;
// test(a);
// console.log(test(a));

// parsing function for 1 < score <= 9 and 10 < score <= Infinity
// let parseRadix;
// let x;

// -----------------------------------------------------------------------
let parseRadix;

// todododo addd this function to roundResult
//  tododododo same as roundResult([allDataScoreSpans])
// * function to increment the score and update the DOM
allDataScoreSpans.forEach((allDataScoreSpan) => {
  const value = allDataScoreSpan.textContent;
  if (allDataScoreSpan <= 9) {
    // parseRadix = parseInt(value, 10);
    parseRadix += allDataScoreSpan.textContent;
    allDataScoreSpan.textContent = parseInt(value, parseRadix) + 1;
  } else if (allDataScoreSpan >= 10) {
    parseRadix = 10;
    allDataScoreSpan.textContent = parseInt(value, parseRadix) + 1;
    // ! maybe the parseradix value is permanently being changed
  }
  // let user;
  // let computer;
  // [user, computer] =  allDataScoreSpans.textContent;
  // return [user, computer];
});

let arrayAllDataScoreSpans  = allDataScoreSpans;
arrayAllDataScoreSpans = [dataUserScoreSpan, dataComputerScoreSpan];
console.log('🚀 ~ dataUserScoreSpan', dataUserScoreSpan.textContent)
console.log('🚀 ~ dataComputerScoreSpan', dataComputerScoreSpan.textContent)
console.log('🚀 ~ arrayAllDataScoreSpans', arrayAllDataScoreSpans)

// function to look at past history score?
/*  allDataScoreSpan.addEventListener('change', (e) => {
    scoreToWin = e.target.value;
    console.log('🚀 ~ scoreToWin', scoreToWin);
  }); */

// * increments the score and updates the DOM
const addScoreUpdate = (dataScoreSpan) => {
  const incrementDataScoreSpan = dataScoreSpan;
  incrementDataScoreSpan.textContent = parseInt(dataScoreSpan.textContent) + 1;
};

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!! BUG!!!!! there's no tie in Result => need to add a tie condition
// todo playGame() could use this
// * Declare result of a single round
const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  if (userChoiceIndex === computerChoiceIndex) {
    roundResultInsert.textContent = winAll;
    resultDisplay.appendChild(roundResultInsert);
  } else if ((userChoiceIndex + 1) % btnPossibleChoices.length === computerChoiceIndex) {
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
    addScoreUpdate(dataComputerScoreSpan);
    // !error    'computerChoicePara' is not defined
    computerChoicePara.classList.add('card__choice-result__choice--win');
    // dataScoreSpan.textContent = parseInt(dataScoreSpan.textContent) + 1;
    // dataComputerScoreSpan.textContent++; /* use parseInt() here LOL */
  } else {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
    addScoreUpdate(dataUserScoreSpan);
    // dataUserScoreSpan.textContent++;
    // !error    'userChoicePara' is not defined
    userChoicePara.classList.add('card__choice-result__choice--win');
    // addScoreUpdate(dataUserScoreSpan);
    // userChoicePara.classList.add('card__choice-result__choice--win');
  }
  // playGame();
};

// ? /* ? can do a kamehameha wave type scoring system */
// ? /* here it's a balance of score progress bar */

// increment the score for user & computer => addScoreUpdate(dataScoreSpan)

/* adds most recent choice history of both users */
// * Function => Adds a new round result to the DOM
const playRound = () => {
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');
  // * Run the random computer choice generator ONLY ONCE HERE !!!
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

  // add text content & classList 'card__choice-result__choice'
  computerChoicePara.textContent = choices[computerChoiceIndex].image;
  computerChoicePara.classList.add('card__choice-result__choice');
  // * Insert DOM result elements content <p> before the last <p>
  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild,
  );
  // ! ? ----> bug
  // * Display result in the DOM UI
  resultDisplay.textContent = `${userChoiceResults[0]} vs ${computerChoiceResults[0]}`;

  return roundResult(userChoiceResults[1], computerChoiceResults[1]);
};

// * reset the game when roundSelecions is changed
/* const resetGame = () => {
  // ? disable buttons
  btnPossibleChoices.forEach((btnPossibleChoice) => {
    btnPossibleChoice.disabled = true;
  });
  // ? remove the appended <p> elements
  userChoiceDisplay.innerHTML = '';
  computerChoiceDisplay.innerHTML = '';
  resultDisplay.textContent = '';
  // ? reset the score
  dataUserScoreSpan.textContent = 0;
  dataComputerScoreSpan.textContent = 0;
  // ? reset the round
  roundResultInsert.textContent = '';
}; */

// * function to display total score and result
const playGame = () => {
  // * play rounds
  for (let i = 0; i < scoreToWin; i += 1) {
    // * filters the userChoice to match the choices array
    fetchUserChoice();
    playRound();
    if (dataUserScoreSpan.textContent === scoreToWin) {
      resultDisplay.textContent = winUser;
    // break;
    // resetGame();
    } else if (dataComputerScoreSpan.textContent === scoreToWin) {
      resultDisplay.textContent = winComputer;
    // break;
    // resetGame();
    } else {
      resultDisplay.textContent = winAll;
    // resetGame();
    }
  }
};

// * -------------------------------------------------------------------------
// * Function => grab the buttons & for each choice - listen to event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value; /* value || key */
  playGame();
}));

/* The break statement terminates the current loop, switch, or label statement
    and transfers program control to the statement following the terminated statement. */
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/break */

// get rounds value set by the user (default is 5)
roundsSelections.addEventListener('change', (e) => {
  console.log('🚀 ~ fetchUserChoice', fetchUserChoice);
  scoreToWin = e.target.value;
  console.log('🚀 ~ scoreToWin', scoreToWin);
  // * reset the game when scoreToWin value is changed
  // resetGame();
  return scoreToWin;
});

// -----------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------
// 20220422105355 => from playRound()
// ? todo think over it
/* // add winnwe classList to the winner of the round()
  if (userChoiceIndex === computerChoiceIndex) {
    userChoicePara.classList.add('card__choice-result__choice--win');
  } else {
    computerChoicePara.classList.add('card__choice-result__choice--win');
  } */

// -----------------------------------------------------------------------------

// 20220422113501
// !error    Assignment to property of function parameter 'dataScoreSpan'
/* https://stackoverflow.com/questions/35637770/how-to-avoid-no-param-reassign-when-setting-a-property-on-a-dom-object */
/* No matter how you word it, the operation you want conflicts with the rule.
    That said, it seems like an XY problem;
    I wouldn't attach properties directly to DOM nodes like that. –  */
/*
  https://stackoverflow.com/a/42399879

  As this article explains, this rule is meant to avoid mutating the arguments object.
  If you assign to a parameter and then try and access some of the parameters
  via the arguments object, it can lead to unexpected results.

  You could keep the rule intact and maintain the AirBnB style by
  using another variable to get a reference to the DOM element and then modify that:

  function (el) {
    var theElement = el;
    theElement.expando = {};
  }
  In JS objects (including DOM nodes) are passed by reference,
  so here el and theElement are references to the same DOM node,
  but modifying theElement doesn't mutate the arguments object
  since arguments[0] remains just a reference to that DOM element.

  This approach is hinted at in the documentation for the rule:

  Examples of correct code for this rule:

  Personally, I would just use the "no-param-reassign":
  ["error", { "props": false }] approach a couple of other answers mentioned.
  Modifying a property of an object that was passed as a parameter
    doesn't change the object reference,
  so it shouldn't run into the kinds of problems this rule is trying to avoid.
*/

// -----------------------------------------------------------------------------

// 20220422133318
// rizu
// 20220422124503
// eslint =>
// let b;
// let x;

// function test(a) {
//   let valueTest = a;
//   if (valueTest <= 9) {
//     b += valueTest;
//     x = parseInt(valueTest, b); /* add b as radix */
//     console.log(x);
//   } else if (valueTest >= 10) {
//     b = 10;
//     x = parseInt(valueTest, b); /* add b as radix */
//     console.log(x);
//   }
//   return x;
// }
// a = 7;
// test(a);
// console.log(test(a));

// -----------------------------------------------------------------------------
// 20220422140515
// !error BUG when computer score goes over 10 the parseRadix gets mixed up
// * increments the score and updates the DOM
// function addScoreUpdate(dataUserScoreSpan, dataComputerScoreSpan) {
//   const dataUserScoreSpanText = dataUserScoreSpan.textContent;
//   const dataComputerScoreSpanText = dataComputerScoreSpan.textContent;
// let arrayDataScores = [dataUserScoreSpanText, dataComputerScoreSpanText];
// arrayDataScores.forEach(arrayDataScore => {
//   if (arrayDataScore <= 9) {
//     parseRadix += arrayDataScore;
//     console.log(`parseRadix: ${parseRadix}`);
//     // x = parseInt(incrementDataScoreSpan, parseRadix); /* add b as radix */
//     incrementDataScoreSpan.textContent = parseInt(dataScoreSpan.textContent, parseRadix) + 1;
//     // incrementDataScoreSpan.textContent = parseInt(dataScoreSpan.textContent) + 1;
//     // console.log(x);
//   } else if (incrementDataScoreSpanValue >= 10) {
//     parseRadix = 10;
//     // x = parseInt(incrementDataScoreSpan, parseRadix); /* add b as radix */
//     incrementDataScoreSpan.textContent = parseInt(dataScoreSpan.textContent, parseRadix) + 1;
//     // incrementDataScoreSpan.textContent = parseInt(dataScoreSpan.textContent) + 1;
//   } else {
//     console.log('🚫 ~ addScoreUpdate()');
//   }
// });
// }

// -----------------------------------------------------------------------------
