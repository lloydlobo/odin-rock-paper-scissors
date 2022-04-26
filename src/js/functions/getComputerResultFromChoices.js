import { choices } from '../constants/constants';
import { computerChoice } from './computerChoice';

// * Function to get computer's choice
function getComputerResultFromChoices() {
  // Run the random computer choice generator ONLY ONCE HERE
  const computerChoices = choices[computerChoice()];
  // Retrieve results & map to computer's random number with choices[] array
  const computerChoiceResults = [computerChoices.image, computerChoices.index];
  // Define the computer results image and index with choices[] array
  const computerChoiceIndex = computerChoiceResults[1];
  return { computerChoiceIndex, computerChoiceResults };
}

export default getComputerResultFromChoices;
