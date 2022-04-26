// Function to insert user and computer choices into DOM
function createChoiceParas() {
  const userChoicePara = document.createElement('p');
  const computerChoicePara = document.createElement('p');
  return { userChoicePara, computerChoicePara };
}
export default createChoiceParas;
