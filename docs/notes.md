# Notes

## TODO

## BACKLOG

## DOING

## DONE

-   [x] 20220413122852 - convert restart() if conditionals to ternary operators - done at 20220413132032

-   [x] Update verbiage of statements at 20220413124947

    -   [x] Update rock "crushes" scissors
    -   [x] Update paper "covers" rock
    -   [x] Update scissors "cuts" paper

-   [x] 20220413124018 20220413122943 Put the the restart() function after the game() function inside the restart() function <!-- is this recursion? -->

-   [x] fix/preferTernaryOperator-JS-D009 @96b70e8 PR#6

## Ideas

-   see if you can unify playRound(playerSelection, computerSelection) with promptUserComputerValues()
    -   As one has to use multiple lines of code to bring in the returns of each functions you
    -   although right now to me it seems that it knows them separate and cleaner.
    -   I think it would be better to have one function that returns the values of both the player and computer
    -   If this is incorrect then what would be a better solution?

### Accessibility font size A A- A+

```js
function makeSizer(size) {
  return function () {
    document.body.style.fontSize = size + "px";
  };
}

const fontSizeDecrease = makeSizer(14);
const fontSizeReset = makeSizer(16);
const fontSizeIncrease = makeSizer(24);

const btnFontSizeIncrease = document.getElementById("fontSizeIncrease");
const btnFontSizeDecrease = document.getElementById("fontSizeDecrease");
const btnFontSizeReset = document.getELementById("fontSizeReset");

btnFontSizeIncrease.onclick = fontSizeIncrease;
btnFontSizeDecrease.onclick = fontSizeDecrease;
btnFontSizeReset.onclick = fontSizeReset;
```

## Archive

-   keep naming conventions sme across all variables. either choose user or player
    -   Update: 20220413124316 It already was consistent.

## INFO

### Rule of 30

> [Source](https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or) — [dzone](https://dzone.com/)

Looking for guidelines like this led me to the “Rule of 30” in Refactoring in Large Software Projects by Martin Lippert and Stephen Roock:

If an element consists of more than 30 subelements, it is highly probable that there is a serious problem:
a) Methods should not have more than an average of 30 code lines (not counting line spaces and comments).

b) A class should contain an average of less than 30 methods, resulting in up to 900 lines of code.

c) A package shouldn’t contain more than 30 classes, thus comprising up to 27,000 code lines.

d) Subsystems with more than 30 packages should be avoided. Such a subsystem would count up to 900 classes with up to 810,000 lines of code.

e) A system with 30 subsystems would thus possess 27,000 classes and 24.3 million code lines.
