"use strict";function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function _iterableToArrayLimit(e,t){var o=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=o){var n,r,i=[],s=!0,a=!1;try{for(o=o.call(e);!(s=(n=o.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){a=!0,r=e}finally{try{s||null==o.return||o.return()}finally{if(a)throw r}}return i}}function _arrayWithHoles(e){if(Array.isArray(e))return e}var keydownPossibleChoicesKey,userChoice,userChoiceValue,userChoiceResults,userChoiceDisplay=document.getElementById("userChoiceDisplay"),computerChoiceDisplay=document.getElementById("computerChoiceDisplay"),resultDisplay=document.getElementById("resultDisplay"),roundsSelections=document.getElementById("roundsSelections"),dataScoreSpanUser=document.querySelector("[data-user-score]"),dataScoreSpanComputer=document.querySelector("[data-computer-score]"),btnPossibleChoices=document.querySelectorAll(".buttonChoice"),roundResultInsert=document.createElement("p"),delayResetGameTimeoutDuration=Number(3e3),choices=[{name:"rock",gameType:["twoPlayer"],image:"✊",index:0,key:"a",type:"traditional",value:"rock"},{name:"paper",gameType:["twoPlayer"],image:"✋",index:1,key:"s",type:"traditional",value:"paper"},{name:"scissors",gameType:["twoPlayer"],image:"✌️",index:2,key:"d",type:"traditional",value:"scissors"}],tieAllImage="🤝",winUserImage="✨",winComputerImage="🔥",winAll="".concat(tieAllImage," It's a Tie!"),winUser="".concat(winUserImage," You Won!"),winComputer="".concat(winComputerImage," Bot Won!"),computerChoice=function(){var e=Math.random()*btnPossibleChoices.length;return Math.floor(e)};function userChoiceFilterChoices(e){userChoice=e.image;var t=e.index;userChoiceResults=[userChoice,t]}function fetchUserChoice(){choices.forEach((function(e){return userChoiceValue===e.name?(userChoiceFilterChoices(e),userChoiceResults):userChoiceResults}))}function fetchKeydownPossibleChoicesKey(){choices.forEach((function(e){return keydownPossibleChoicesKey===e.key?(userChoiceFilterChoices(e),userChoiceResults):userChoiceResults}))}var addScoreUpdate=function(e){e.textContent=parseInt(e.textContent,10)+1},roundResult=function(e,t){var o=function(e){roundResultInsert.textContent=e,resultDisplay.appendChild(roundResultInsert)},n=(e+1)%choices.length===t;return e===t?(o(winAll),"tie"):n?(o(winComputer),addScoreUpdate(dataScoreSpanComputer),"computer"):n?"error":(o(winUser),addScoreUpdate(dataScoreSpanUser),"user")};function createChoiceParas(){return{userChoicePara:document.createElement("p"),computerChoicePara:document.createElement("p")}}function createChoiceParasTextContent(e,t,o){var n=t;e.textContent=userChoice,n.textContent=choices[o].image,e.classList.add("card__choice-result__choice"),n.classList.add("card__choice-result__choice")}function getComputerResultFromChoices(){var e=choices[computerChoice()],t=[e.image,e.index];return{computerChoiceIndex:t[1],computerChoiceResults:t}}function displayChoicesContentInDOM(e,t,o){return userChoiceDisplay.insertBefore(e,userChoiceDisplay.firstChild),computerChoiceDisplay.insertBefore(t,computerChoiceDisplay.firstChild),resultDisplay.textContent="".concat(userChoiceResults[0]," vs ").concat(o[0]),roundResult(userChoiceResults[1],o[1])}var playRound=function(){var e=createChoiceParas(),t=e.userChoicePara,o=e.computerChoicePara,n=getComputerResultFromChoices(),r=n.computerChoiceIndex,i=n.computerChoiceResults;return createChoiceParasTextContent(t,o,r),displayChoicesContentInDOM(t,o,i)};function btnDisableBtnPossibleChoices(){btnPossibleChoices.forEach((function(e){e.disabled=!0}))}function btnEnableBtnPossibleChoices(){btnPossibleChoices.forEach((function(e){e.disabled=!1}))}var countdownTimer=function(){var e=document.createElement("p");e.textContent="3",e.classList.add("countdownTimerStartGame"),resultDisplay.appendChild(e),setTimeout((function(){e.textContent="2"}),1e3),setTimeout((function(){e.textContent="1"}),2e3),setTimeout((function(){e.textContent="GO!"}),3e3),setTimeout((function(){e.textContent=""}),4e3),setTimeout((function(){btnEnableBtnPossibleChoices()}),5e3)},resetGame=function(){var e=_slicedToArray("",4);userChoiceDisplay.textContent=e[0],computerChoiceDisplay.textContent=e[1],resultDisplay.textContent=e[2],roundResultInsert.textContent=e[3];var t=["0","0"];dataScoreSpanUser.textContent=t[0],dataScoreSpanComputer.textContent=t[1],countdownTimer()},scoreToWin=Number(roundsSelections.value);function delayResetGameTimeOut(){setTimeout((function(){resetGame()}),delayResetGameTimeoutDuration)}function roundResultInsertWinGameUser(){roundResultInsert.textContent=winUser}function roundResultInsertWinGameComputer(){roundResultInsert.textContent=winComputer}roundsSelections.addEventListener("change",(function(e){return scoreToWin=Number(e.target.value),resetGame(),scoreToWin}));var keydownController=new AbortController,keydownAbortDisableBtn=document.createElement("button");keydownAbortDisableBtn.textContent="Disable Keyboard Shortcuts",keydownAbortDisableBtn.classList.add("keydownAbortDisableBtn");var keydownAbort=function(){keydownController.abort()};function declareGameWinner(){var e=dataScoreSpanUser.innerText,t=dataScoreSpanComputer.innerText,o=Number(e),n=Number(t)===scoreToWin;o===scoreToWin?(roundResultInsertWinGameUser(),btnDisableBtnPossibleChoices(),keydownAbort(),delayResetGameTimeOut()):n&&(roundResultInsertWinGameComputer(),btnDisableBtnPossibleChoices(),keydownAbort(),roundResultInsert.textContent=winComputer,delayResetGameTimeOut())}function playGame(){fetchUserChoice(),fetchKeydownPossibleChoicesKey(),playRound(),declareGameWinner()}window.addEventListener("keydown",(function(e){keydownPossibleChoicesKey=(keydownPossibleChoicesKey=e.key).toLowerCase(),playGame()}),AbortSignal),btnPossibleChoices.forEach((function(e){return e.addEventListener("click",(function(e){userChoiceValue=e.target.value,playGame()}))}));
//# sourceMappingURL=app.js.map