// console.dir(document.body); -------------------------------------------------------------
// const added = [0, 1, 2, 3, 4].map((item) => item + 1);
// console.log(added); // prints "[1, 2, 3, 4, 5]"

//-------------------------------------------------------------\\
// get DOM elements by id
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const roundsSelections = document.getElementById("roundsSelections");
// select all buttons with class of buttonChoice
const btnPossibleChoices = document.querySelectorAll(".buttonChoice");

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

// set result statement
const winUser = "You win";
const winComputer = "Computer wins";
const winAll = "It's a tie! Everyone Wins!";

const tieAllImage = `🫶 `; /* https://emojipedia.org/heart-hands/ */

let userChoiceValue;
let userChoiceIndex;
let userChoice;

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener("click" || "keydown", (e) => {
    userChoiceValue =
      e.target.value || e.target.code; /* change it to value or id? */
    fetchUserChoice();
    playRound();
    roundResult();
  })
);

const fetchUserChoice = () => {
  choices.forEach((choice) => {
    if (userChoiceValue.includes(choice.name || choice.key)) {
      userChoice = choice.image;
      userChoiceIndex = choice.index;

      return userChoice;
    }
  });
};

const playRound = () => {
  const computerChoiceIndex = computerChoice(); /* computer Index */
  const userChoicePara = document.createElement("p");
  userChoicePara.textContent = userChoice;
  const computerChoicePara = document.createElement("p");
  computerChoicePara.textContent = choices[computerChoiceIndex].image;
  userChoiceDisplay.insertBefore(userChoicePara, userChoiceDisplay.firstChild);
  computerChoiceDisplay.insertBefore(
    computerChoicePara,
    computerChoiceDisplay.firstChild
  ); /* https://stackoverflow.com/questions/23749464/reverse-the-order-of-elements-added-to-dom-with-javascript */
  resultDisplay.textContent = `${userChoice} vs ${computerChoicePara.textContent}`;
};

// insert a <p> element below resultDisplay
let roundResultInsert = document.createElement("p");

// function to declare result of a single round
const roundResult = (userChoiceIndex, computerChoiceIndex) => {
  if (userChoiceIndex === computerChoiceIndex) {
    console.log(winAll);
    roundResultInsert.textContent = winAll;
    resultDisplay.appendChild(roundResultInsert);
  } else if ((userChoiceIndex + 1) % 3 === computerChoiceIndex) {
    console.log(winComputer);
    roundResultInsert.textContent = winComputer;
    resultDisplay.appendChild(roundResultInsert);
  } else {
    console.log(winUser);
    roundResultInsert.textContent = winUser;
    resultDisplay.appendChild(roundResultInsert);
  }
  // console.log(userChoiceIndex, computerChoiceIndex); /* # => undefined, undefined */
};

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

/* choices.forEach((choice) => {
  const result = choice.key;
  const resultString = JSON.stringify(result);
  // const resultStringArray = resultString.map();
  console.log("🚀 ~ choices.forEach ~ resultString", resultString);
}); */

// -----------------------------------------------------------------------------
/* window.addEventListener(
  "keydown",
  (event) => {
    let keydownChoiceKey = event.key;
    let keydownChoiceCode = event.code;
    const keydownPara = document.createElement("p");
    keydownPara.textContent = `Key Event => key: ${keydownChoiceKey} & code: ${keydownChoiceCode}`;
    const keydownOutputDisplay = document.getElementById(
      "keydownOutputDisplay"
    );
    keydownOutputDisplay.appendChild(keydownPara);
    // console.log("🚀 ~ keydownChoiceCode", keydownChoiceKey);
    return keydownChoiceKey;
  },
  true
); */

// scoring logic for scalability /* later replace 3 with choices.length */
/*
Rock = 0
Paper = 1
Scissors = 2
 */
/*
else if ((userChoiceIndex + 1) % 3 === computerChoiceIndex)
-----------------------------------------------------------
#1. u: Rock(0) c: Paper(1)
(0 + 1) % 3 === 1 # => winComputer
1 modulo 3 => 1
1 = (3 * 0) + 1

#2. u: Paper(1) c: Scissors(2)
(1 + 1) % 3 === 2  # => winComputer
2 modulo 3 => 2
2 = (3 * 0) + 2

#3. u: Scissors(2) c: Rock(0)
(2 + 1) % 3 === 0  # => winComputer
3 modulo 3 => 0
3 = (3 * 1) + 0
*/
/* const getRoundResult = (userChoice, computerChoice) => {
}; */

/* const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. YOU SUCCEEDED!`;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. COMPUTER SUCCEEDED!`;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissors":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. EVERYONE SUCCEEDED!`;
      break;
  }
}; */

//-------------------------------------------------------------\\
// 20220419161140
/* const gameGrid = document.getElementById("gameGrid");
gameGrid.append(userChoiceDisplay, computerChoiceDisplay, resultDisplay); */

/* const handleClick = (e) => {
  userChoice = e.target.innerHTML;
  userChoiceDisplay.innerHTML = `User Choice: ${userChoice}`;
  generateComputerChoice();
  getResults();
}; */

/* const generateComputerChoice = () => {
  const randomChoice = Math.floor(Math.random() * choices.length);
  computerChoice = randomChoice;
  computerChoiceDisplay.innerHTML = `Computer Choice: ${computerChoice}`;
}; */

/* for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id =
    choices[i];
    // delete id for using e.target.innerHTML in the hanleClick()
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
} */

// results
/* const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. YOU SUCCEEDED!`;
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. COMPUTER SUCCEEDED!`;
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorscissors":
      choicesDisplayResult.innerHTML = `You chose: ${userChoice} & Computer chose: ${computerChoice}. EVERYONE SUCCEEDED!`;
      break;
  }
}; */

//-------------------------------------------------------------\\
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
