// var gulp = require("gulp");
// var browserSync = require("browser-sync").create();
// var reload = browserSync.reload;

// gulp.task("default", function () {
//   browserSync.init({
//     server: {
//       baseDir: "./",
//     },
//   });

//   gulp.watch("**/*").on("change", reload);
// });

// ------------------------------------------------------------------

// 20220420122045
const { src, dest, watch, series, parallel } = require("gulp");
const browsersync = require("browser-sync").create();
const cleanCss = require("clean-css"); // var input = "a{font-weight:bold;}"; // var options = {/* options */}; // var output = new CleanCSS(options).minify(input);
// https://www.toptal.com/javascript/optimize-js-and-css-with-gulp
const gulpCleanCss = require("gulp-clean-css");
const concat = require("gulp-concat");
const cssnano = require("cssnano");

// const gulp = require("gulp");
const postcss = require("gulp-postcss");
const sass = require("gulp-sass")(require("sass"));
const terser = require("gulp-terser");

// cleanCss task
/* function cleanCssTask() {
  return src("dist/css/*.css", { sourcemaps: true })
    .pipe(cleanCss())
    .pipe(dest("dist/css/", { sourcemaps: "." }));
} */

// gulp-clean-css task /* gulp recommends clean-css */
function gulpCleanCssTask() {
  return src("src/css/*.css", { sourcemaps: true })
    .pipe(gulpCleanCss())
    .pipe(dest("dist", { sourcemaps: "." }));
}

// javascript task
function jsTask() {
  return src("src/js/main.js", { sourcemaps: true })
    .pipe(terser()) /* minifies JavaScript Files */
    .pipe(dest("dist", { sourcemaps: "." })); /* saces in dist folder */
}

// sass task /* nodestream returned usein gsrc function called gulp and read app/style..... */
// function scssTask() {
//   return src("src/scss/style.scss", { sourcemaps: true })
//     .pipe(sass())
//     .pipe(postcss([cssnano()])) /* minifies it */
//     .pipe(dest("dist", { sourcemaps: "." }));
// }

// browsersync serve task /* it's not a gulp () so manually init it */
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "./",
    },
  });
  cb();
}
// browsersync reload task
function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// watch task
function watchTask() {
  watch("**/*.html").on("change", browsersync.reload);
  watch(
    ["src/css/**/*.css", "src/js/**/*.js"],
    series(gulpCleanCssTask, jsTask, browsersyncReload)
  ); /* add scssTask to the series() */
}

// * default gulp task
exports.default = series(browsersyncServe, gulpCleanCssTask, jsTask, watchTask);

// ------------------------------------------------------------------
// archive

// 20220420150031
// /* https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f */

// 20220420145735
/* // const fractal = require("./fractal.js");
// const logger = fractal.cli.console;
// const sassGlob = require("gulp-sass-glob");
// const plumber = require("gulp-plumber");
// const notify = require("gulp-notify");
// const path = require("path"); */
// /* https://www.smashingmagazine.com/2018/07/pattern-library-first-css/ */
