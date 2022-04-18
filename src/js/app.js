console.dir(document.body);

// shortcut for console.log
let clg = (variable) => {
  console.log(variable);
};

// get DOM elements by id
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
// console.log(resultDisplay); /* # => span#resultDisplay */
// clg(resultDisplay); /* # => span#resultDisplay */

// select all buttons with className of buttons
const btnPossibleChoices = document.querySelectorAll(".buttonChoice");
/* # => NodeList(3) [button#btnRock.buttonChoice, button#btnPaper.buttonChoice, button#btnScissors.buttonChoice] */

// returns a random integer => 0<= i <=2
/* 3 btns, Math.floor() returns Math.random() to the nearest positive integer value */
let computerChoice = () => {
  let randomNumber = Math.random();
  const randomChoice = Math.floor(randomNumber * btnPossibleChoices.length);
  return randomChoice;
};

const choices = [
  {
    name: "rock",
    image: "✊",
    key: "a",
    value: "rock",
    type: "traditional",
    index: 0,
  },
  {
    name: "paper",
    image: "✋",
    key: "s",
    value: "paper",
    type: "traditional",
    index: 1,
  },
  {
    name: "scissors",
    image: "🤞",
    key: "d",
    value: "scissors",
    type: "traditional",
    index: 2,
  },
];

let userChoice;

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener("click", (e) => {
    userChoiceValue = e.target.value; /* change it to value or id? */
    console.log(
      "🚀 ~ file: app.js ~ line 60 ~ btnPossibleChoice.addEventListener ~ userChoiceValue",
      userChoiceValue
    );
    // if userChoice includes any of the choices[].name
    choices.forEach((choice) => {
      if (userChoiceValue.includes(choice.name)) {
        userChoice = choice.image;
        return userChoice;
      }
    });
    // add btnchoice text id to the DOM when clicked
    userChoiceDisplay.textContent = userChoice;
    // display computer choice in the DOM
    computerChoiceDisplay.textContent = choices[computerChoice()].image;
  })
);

const added = [0, 1, 2, 3, 4].map((item) => item + 1);
console.log(added); // prints "[1, 2, 3, 4, 5]"

// console.log(choices[0].image);

// listen to key strokes 'a' 's' 'd'
// a = inline-start(rock); b = center(paper); d = inline-end(scissors
// let userKeyStrokes;

// pseudo code
// let keys = [a,s,d];
// keys.value.append = {rock, paper, scissors}

// let choicesResult = choices.groupBy(({ type }) => type);
// console.log(choicesResult.traditional);

// console.log(`These are the choices:\n${choicesArray}`);
// forEach userKeyStrokes([a,s,d])
// userKeyStrokes.addEventListener("[")
