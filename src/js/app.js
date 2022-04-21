// $ ./node_modules/.bin/eslint --fix src/js/app.js

// get DOM elements by id
const computerChoiceDisplay = document.getElementById('computerChoiceDisplay');
const userChoiceDisplay = document.getElementById('userChoiceDisplay');
const resultDisplay = document.getElementById('resultDisplay');
// const roundsSelections = document.getElementById('roundsSelections');

// select all buttons with class of buttonChoice
const btnPossibleChoices = document.querySelectorAll('.buttonChoice');

// returns a random integer => 0<= i <=2
/* 3 btns, Math.floor() returns Math.random() to the nearest positive integer value */
function computerChoice() {
  const randomNumber = Math.random();
  const randomChoice = Math.floor(randomNumber * btnPossibleChoices.length);
  return randomChoice;
}

// btnPossibleChoices.length can be set when something apart from type: "traditional" is set.
/* [rock, paper, scissors, lizard, spock] */
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
]; /* if user selects mode apart from traditional */ /* add that type's image as button innerHTML */

// set result statement
const winUser = 'You win';
const winComputer = 'Computer wins';
const winAll = "It's a tie! Everyone Wins!";
// const tieAllImage = '🫶 '; /* https://emojipedia.org/heart-hands/ */

let userChoiceValue;
// let userChoiceIndex;
let userChoice;
let userChoiceResults;

// match result of userChoice if it includes the choice array's name/key
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
// -----------------------------------------------------------------------------
const playRound = () => {
  const computerChoiceIndex = computerChoice(); /* generate computer Index */
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');

  userChoicePara.textContent = userChoice;
  computerChoicePara.textContent = choices[computerChoiceIndex].image;

  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild
  ); /* https://stackoverflow.com/questions/23749464/reverse-the-order-of-elements-added-to-dom-with-javascript */

  resultDisplay.textContent = `${userChoice} vs ${computerChoicePara.textContent}`;
};

// insert a <p> element below resultDisplay
const roundResultInsert = document.createElement('p');

// -----------------------------------------------------------------------------

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
// function to declare result of a single round
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
const computerChoices = choices[computerChoice()];

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener('click' || 'keydown', (e) => {
    userChoiceValue = e.target.value; /* value || key */

    // fetch user and computer choice
    fetchUserChoice();

    /* const computerChoiceResults = [
      choices[computerChoice()].image,
      choices[computerChoice()].index,
    ]; */

    const computerChoiceResults = [
      computerChoices.image,
      computerChoices.index,
    ];

    // play round
    playRound();

    // * declare result of round /* this is key! */
    roundResult(userChoiceResults[1], computerChoiceResults[1]);
  })
);

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
