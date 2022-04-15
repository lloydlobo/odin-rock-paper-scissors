# Prototype Notes

**Table Of Contents**

- [Prototype Notes](#prototype-notes)
  - [Notes](#notes)
    - [TODO](#todo)
    - [BACKLOG](#backlog)
    - [DOING](#doing)
    - [DONE](#done)
  - [Ideas](#ideas)
    - [Accessibility font size A A- A+](#accessibility-font-size-a-a--a)
  - [Archive](#archive)
  - [Information](#information)
    - [Rule of 30](#rule-of-30)
    - [SASS](#sass)
  - [Attributions](#attributions)

## Notes

### TODO

### BACKLOG

### DOING

### DONE

-   [x] 20220413122852 - convert restart() if conditionals to ternary operators - done at 20220413132032

-   [x] Update verbiage of statements at 20220413124947

    -   [x] Update rock "crushes" scissors
    -   [x] Update paper "covers" rock
    -   [x] Update scissors "cuts" paper

-   [x] 20220413124018 20220413122943 Put the the restart() function after the game() function inside the restart() function <!-- is this recursion? -->

-   [x] fix/preferTernaryOperator-JS-D009 @96b70e8 PR#6

* * *

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

## Information

### Rule of 30

> [Source](https://dzone.com/articles/rule-30-%E2%80%93-when-method-class-or) — [dzone](https://dzone.com/)

Looking for guidelines like this led me to the “Rule of 30” in Refactoring in Large Software Projects by Martin Lippert and Stephen Roock:

If an element consists of more than 30 subelements, it is highly probable that there is a serious problem:
a) Methods should not have more than an average of 30 code lines (not counting line spaces and comments).

b) A class should contain an average of less than 30 methods, resulting in up to 900 lines of code.

c) A package shouldn’t contain more than 30 classes, thus comprising up to 27,000 code lines.

d) Subsystems with more than 30 packages should be avoided. Such a subsystem would count up to 900 classes with up to 810,000 lines of code.

e) A system with 30 subsystems would thus possess 27,000 classes and 24.3 million code lines.

* * *

### SASS

/_ Main: it should ONLY contain the imports for the above files.
 _/

/_ Note: There’s no need to include the \_ or .scss file extension when importing. _/

@import "abstracts/variables";
@import "abstracts/functions";
@import "abstracts/mixins";

@import "vendors/bootstrap";
@import "vendors/jquery-ui";

@import "base/reset";
@import "base/typography";

@import "layout/navigation";
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/sidebar";
@import "layout/forms";

@import "components/buttons";
@import "components/carousel";
@import "components/slider";

@import "pages/home";
@import "pages/about";
@import "pages/contact";

@import "themes/theme";
@import "themes/admin";
/_ If any file grows too cluttered or disorganized, it’s time to expand our structure. Consider adding a folder for your components for example, and breaking it up into individual files such as \_button.scss & \_carousel.scss. _/
/_ The 7–1 Pattern _/
/_ Source: <https://itnext.io/structuring-your-sass-projects-c8d41fa55ed4#:~:text=Simple%20Structure&text=scss%20.,buttons%2C%20navbars%2C%20cards%20etc>. _/

/_ sass/
\|
|– abstracts/ (or utilities/)
|   |– \_variables.scss    // Sass Variables
|   |– \_functions.scss    // Sass Functions
|   |– \_mixins.scss       // Sass Mixins
\|
|– base/
|   |– \_reset.scss        // Reset/normalize
|   |– \_typography.scss   // Typography rules
\|
|– components/ (or modules/)
|   |– \_buttons.scss      // Buttons
|   |– \_carousel.scss     // Carousel
|   |– \_slider.scss       // Slider
\|
|– layout/
|   |– \_navigation.scss   // Navigation
|   |– \_grid.scss         // Grid system
|   |– \_header.scss       // Header
|   |– \_footer.scss       // Footer
|   |– \_sidebar.scss      // Sidebar
|   |– \_forms.scss        // Forms
\|
|– pages/
|   |– \_home.scss         // Home specific styles
|   |– \_about.scss        // About specific styles
|   |– \_contact.scss      // Contact specific styles
\|
|– themes/
|   |– \_theme.scss        // Default theme
|   |– \_admin.scss        // Admin theme
\|
|– vendors/
|   |– \_bootstrap.scss    // Bootstrap
|   |– \_jquery-ui.scss    // jQuery UI
\|
\`– main.scss              // Main Sass file _/

/_ other references: <https://matthewelsom.com/blog/simple-scss-playbook.html> _/


/_ Layout: contains all the CSS that handles the layout, such as the container and any grid systems.
 _/

/* Components: anything reusable such as buttons, navbars, cards etc.
 */

 /_ Base: contained within this file are all your resets, variables, mixins, and any utility classes.
 _/


## Attributions

-   <https://lottiefiles.com/Dahish>
