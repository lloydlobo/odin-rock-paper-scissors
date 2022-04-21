/* $ ./node_modules/.bin/eslint --fix src/js/app.js */

// set result statement
/* declare and intialize variables => always const before let */
const winUser = 'You win';
const winComputer = 'Computer wins';
const winAll = "It's a tie! Everyone Wins!";
/* const tieAllImage = '🫶 '; */ /* https://emojipedia.org/heart-hands/ */

// declare variables
let userChoice; /* "temporal dead zone" (TDZ) */
let userChoiceValue;
let userChoiceResults;
/* let userChoiceIndex; */

// get DOM elements by id
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
/* const roundsSelections = document.getElementById('roundsSelections'); */

// select all buttons with class of buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');

/* set btnPossibleChoices.length when !type: "traditional" */
// choices array to store all possible choices
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

// ? insert this in roundResult() function
const roundResultInsert = document.createElement('p'); // create a new <p> element

// * Declare result of a single round
const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  if (userChoiceIndex === computerChoiceIndex) {
    roundResultInsert.textContent = winAll;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 0 && computerChoiceIndex === 1) {
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 1 && computerChoiceIndex === 0) {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 1 && computerChoiceIndex === 2) {
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 2 && computerChoiceIndex === 1) {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 2 && computerChoiceIndex === 0) {
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
  }
  if (userChoiceIndex === 0 && computerChoiceIndex === 2) {
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
  }
};

// * Function => Adds a new round result to the DOM
const playRound = () => {
  // Create DOM result elements content <p>
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');

  // * Run the random computer choice generator ONLY ONCE HERE
  const computerChoices = choices[computerChoice()];

  // Retrieve results & map to computer's random number with choices[] array
  const computerChoiceResults = [computerChoices.image, computerChoices.index];

  // Defeine the computer results image and index with choices[] array
  /* const computerChoiceImage = computerChoiceResults[0]; */
  const computerChoiceIndex = computerChoiceResults[1];

  userChoicePara.textContent = userChoice;
  computerChoicePara.textContent = choices[computerChoiceIndex].image;

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

// * Function => grab the buttons & for each choice - listen to event
btnPossibleChoices.forEach((btnPossibleChoice) => btnPossibleChoice.addEventListener('click', (e) => {
  userChoiceValue = e.target.value; /* value || key */
  /* console.clear(); */
  // * filters the userChoice to match the choices array
  fetchUserChoice();

  // * play round
  playRound();
}));

// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
// -----------------------------------------------------------------------------
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

//  --------------------------------------------------------------------

/* const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  if (userChoiceIndex === computerChoiceIndex) {
    console.log(winAll);
    roundResultInsert.textContent = winAll;
    resultDisplay.appendChild(roundResultInsert);
  }
  if ((userChoiceIndex + 1) % 3 === computerChoiceIndex) {
    console.log(winComputer);
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
  } else {
    console.log(winUser);
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
  }
}; */
