import { btnPossibleChoices } from '../constants/constants';

// function enables buttons after resetGame()
const btnEnableBtnPossibleChoices = () => {
  btnPossibleChoices.forEach((btnPossibleChoice) => {
    const btnToEnable = btnPossibleChoice;
    btnToEnable.disabled = false;
  });
};

export default btnEnableBtnPossibleChoices;
