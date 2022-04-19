// console.dir(document.body);
//-------------------------------------------------------------\\

// const added = [0, 1, 2, 3, 4].map((item) => item + 1);
// console.log(added); // prints "[1, 2, 3, 4, 5]"

// get DOM elements by id
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const roundsSelections = document.getElementById("roundsSelections");
// select all buttons with className of buttons
const btnPossibleChoices = document.querySelectorAll(".buttonChoice");
/* # => NodeList(3)=>[button#btnRock.buttonChoice, button#btnPaper.buttonChoice, button#btnScissors.buttonChoice] */

// returns a random integer => 0<= i <=2
/* 3 btns, Math.floor() returns Math.random() to the nearest positive integer value */
let computerChoice = () => {
  let randomNumber = Math.random();
  const randomChoice = Math.floor(randomNumber * btnPossibleChoices.length);
  return randomChoice;
};

// btnPossibleChoices.length can be set when something apart from type: "traditional" is set. /* [rock, paper, scissors, lizard, spock] */

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
    image: "✌️",
    key: "d",
    value: "scissors",
    type: "traditional",
    index: 2,
  },
]; /* if user selects mode apart from traditional */ /* add that type's image as button innerHTML */

/*
https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code
*/
// Key Event => key: a & code: KeyA
// Key Event => key: s & code: KeyS
// Key Event => key: d & code: KeyD

// const choicesKeyboardKeys = [
//   "a",
//   "s",
//   "d",
// ]; /* quick keyboard shortcuts for web users */

choices.forEach((choice) => {
  const result = choice.key;
  const resultString = JSON.stringify(result);
  // const resultStringArray = resultString.map();
  console.log("🚀 ~ choices.forEach ~ resultString", resultString);
});

// set result statement
const winUser = "You win";
const winComputer = "Computer wins";
const winAll = "It's a tie! Everyone Wins!";

const tieAllImage = `🫶 `; /* https://emojipedia.org/heart-hands/ */

let userChoiceValue;
let userChoiceIndex;
let userChoice;

// -----------------------------------------------------------------------------
let keydownChoiceKey;
let keydownChoiceCode;

window.addEventListener(
  "keydown",
  (event) => {
    keydownChoiceKey = event.key;
    keydownChoiceCode = event.code;

    const keydownPara = document.createElement("p");

    keydownPara.textContent = `Key Event => key: ${keydownChoiceKey} & code: ${keydownChoiceCode}`;

    let keydownOutputDisplay = document.getElementById("keydownOutputDisplay");

    keydownOutputDisplay.appendChild(keydownPara);
    // console.log("🚀 ~ keydownChoiceCode", keydownChoiceKey);
    return keydownChoiceKey;
  },
  true
);

console.log("🚀 ~ keydownChoiceKey", keydownChoiceKey);

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener("click" || "keydown", (e) => {
    userChoiceValue =
      e.target.value || e.target.code; /* change it to value or id? */
    // if userChoice includes any of the choices[].name
    choices.forEach((choice) => {
      if (userChoiceValue.includes(choice.name || choice.key)) {
        userChoice = choice.image;
        userChoiceIndex = choice.index;
        return userChoice;
      }
    });
    const p1 = userChoiceIndex; /* user Index */
    const p2 = computerChoice(); /* computer Index */
    console.log(p1, p2);
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = choices[p2].image;
    // declare single round result
    // if (userChoice === computerChoice) {
    // } else {
    // }
    resultDisplay.textContent = `${userChoice} vs ${computerChoiceDisplay.textContent}`;
  })
);

// let roundsUserSelectValue;

// roundsSelections.addEventListener("click", (e) => {
//   roundsUserSelectValue = e.target.value;
//   console.log(roundsUserSelectValue);
// }); /* fix the logic to display option value when clicked - check semantic mdn */

// roundsSelections.forEach((roundSelection) =>
//   roundsSelection.addEventListener("click", (e) => {
//     console.log(e.target.value);
//   })
// );

// let winner = () => {
//   choices.forEach((choice) => {
//     if (userChoiceValue.includes(choice.name)) {
//       userChoice = choice.index;
//       return userChoice;
//     }
//   });
//   // add btn
// };

// const playGame = () => {
//   for (let round = 0; round < array.length; round++) {
//     const element = array[round];
//   }
// };

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
