console.dir(document.body);

// get DOM elements by id
const computerChoiceDisplay = document.getElementById("computerChoiceDisplay");
const userChoiceDisplay = document.getElementById("userChoiceDisplay");
const resultDisplay = document.getElementById("resultDisplay");

// select all buttons with className of buttons
const btnPossibleChoices = document.querySelectorAll(".buttonChoice");

console.log(
  btnPossibleChoices
); /* # => NodeList(3) [button#btnRock.buttonChoice, button#btnPaper.buttonChoice, button#btnScissors.buttonChoice] */
let userChoice;

// grab the buttons and for each possible choice
btnPossibleChoices.forEach((btnPossibleChoice) =>
  btnPossibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    // get userChoicesDisplay
  })
);

console.log(userChoice.id);
