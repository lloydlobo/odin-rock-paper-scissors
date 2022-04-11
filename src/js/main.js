console.log("The Odin Project - Project: Rock Paper Scissors");
function computerPlay() {
  let optionsPlay = ["Rock", "Paper", "Scissors"];
  let randomOptionsPlay =
    optionsPlay[Math.floor(Math.random() * optionsPlay.length)];
  console.log(`Computer chose: ${randomOptionsPlay}`);
}
computerPlay();
