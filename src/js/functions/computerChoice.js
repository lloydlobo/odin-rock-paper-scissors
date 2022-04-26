import btnPossibleChoices from './btnEnableBtnPossibleChoices';

/* 3 buttons, Math.floor() returns Math.random() to the nearest +ve integer */
// * Function to generate computer's random integer => 0<= i <=2
const computerChoice = () => {
  const randomNumber = Math.random();
  const numberOfButtons = btnPossibleChoices.length;
  const randomChoiceNumber = randomNumber * numberOfButtons;
  const randomChoice = Math.floor(randomChoiceNumber);

  return randomChoice;
};

export default computerChoice;
