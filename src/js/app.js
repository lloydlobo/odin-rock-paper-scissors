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

let userChoice;

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.value; /* change it to value or id? */
    // add btnchoice text id to the DOM when clicked
    userChoiceDisplay.textContent = userChoice;
  })
);

let computerChoice = () => {
  let randomNumber = Math.random();
  console.log(randomNumber);
  const randomChoice = Math.floor(randomNumber * btnPossibleChoices.length);
  return randomChoice;
};
console.log(computerChoice());

// listen to key strokes 'a' 's' 'd'
// a = inline-start(rock); b = center(paper); d = inline-end(scissors
// let userKeyStrokes;

// pseudo code
// let keys = [a,s,d];
// keys.value.append = {rock, paper, scissors}
// const choices = [
//   {
//     name: rock,
//     image: "✊",
//     key: "a",
//     value: "rock",
//     type: "traditional",
//   },
//   {
//     name: paper,
//     image: "✋",
//     key: "s",
//     value: "paper",
//     type: "traditional",
//   },
//   {
//     name: scissors,
//     image: "🤞",
//     key: "d",
//     value: "scissors",
//     type: "traditional",
//   },
// ];

// let choicesResult = choices.groupBy(({ type }) => type);
// console.log(choicesResult.traditional);

// console.log(`These are the choices:\n${choicesArray}`);
// forEach userKeyStrokes([a,s,d])
// userKeyStrokes.addEventListener("[")
