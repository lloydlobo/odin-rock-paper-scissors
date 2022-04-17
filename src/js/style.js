console.dir(document.body);

let logoTextAll = document.querySelectorAll("#logoText");

const green = `green`;

logoTextAll.style.setProperty("color", green);

console.log(logoTextAll);

function logoInnerText(n) {
  return logoTextAll[n].innerHTML;
}

// function fetchInnerText() {
//   for (let i = 0; i < 4; i++) {
//        const {odin, rock, paper, scissors} = logoInnerText([i])
//       return odin, rock, paper, scissors;
//   }
// }

// let result = fetchInnerText();
// console.log(result);

let odin = logoInnerText([0]);
const rock = logoInnerText([1]);
const paper = logoInnerText([2]);
const scissors = logoInnerText([3]);

console.log(odin, rock, paper, scissors);
const odin0 = odin.charAt(0);
console.log(odin0);
odin.charAt(0).setProperty("font-weight", "900");
