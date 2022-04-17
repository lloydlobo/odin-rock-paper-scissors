// toggle theme setup

// get toggleTheme object
/**
 * @param  {} "toggleTheme"
 */
const btnToggleTheme = document.getElementById("toggleTheme");

// get user color preference
/**
 * @param  {} =>{if(localStorage.getItem("theme-preference"
 * @param  {} returnlocalStorage.getItem("theme-preference"
 * @param  {dark} ;elsereturnwindow.matchMedia("(prefers-color-scheme
 * @returns light
 */
const getUserColorPreference = () => {
  // fetch theme preference from local storage of user
  if (localStorage.getItem("theme-preference"))
    return localStorage.getItem("theme-preference");
  else
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
};

// function sets up color preference /*  */
/**
 * @param  {} =>{localStorage.setItem("theme-preference"
 * @param  {} theme.value
 * @param  {} ;reflectPreference(
 */
const updateColorPreference = () => {
  localStorage.setItem("theme-preference", theme.value);
  reflectPreference(); /* is this a return? arrow-function */
};

// sets data-theme to them.value, sets aria-live to 'light' or 'dark'
// function to get toggleTheme DOM element
/**
 * @param  {} =>{document.firstElementChild.setAttribute("data-theme"
 * @param  {} theme.value
 * @param  {} ;btnToggleTheme?.setAttribute("aria-live"
 * @param  {} theme.value
 */
const reflectPreference = () => {
  document.firstElementChild.setAttribute("data-theme", theme.value);
  btnToggleTheme?.setAttribute("aria-live", theme.value);
};
/**
 * @param  {} =>{theme.value=getUserColorPreference();
 */
const theme = {
  value: getUserColorPreference(),
};

// avoid page flashes on load by setting preference early
/**
 * @param  {} =>{theme.value=getUserColorPreference();
 */
reflectPreference();

// add event listener to toggleTheme button
/**
 * @param  {} =>{reflectPreference(
 * @param  {} ;btnToggleTheme.addEventListener("click"
 * @param  {} (e
 * @param  {"light";updateColorPreference(} =>{theme.value=theme.value==="light"?"dark"
 */
window.onload = () => {
  // inform screen readers the button value on loading
  reflectPreference();

  btnToggleTheme.addEventListener("click", (e) => {
    theme.value = theme.value === "light" ? "dark" : "light";

    updateColorPreference();
  });
};

// end toggle theme setup
// add event listener to matchMedia
/**
 * @param  {dark} "(prefers-color-scheme
 */
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", ({ matches: isDark }) => {
    theme.value = isDark ? "dark" : "light";
    updateColorPreference();
  });
