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
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// sass task /* nodestream returned usein gsrc function called gulp and read app/style..... */
function scssTask() {
  return src("app/scss/style.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()])) /* minifies it */
    .pipe(dest("dist", { sourcemaps: "." }));
}

// javascript task
function jsTask() {
  return src("app/js/main.js", { sourcemaps: true })
    .pipe(terser()) /* minifies JavaScript Files */
    .pipe(dest("dist", { sourcemaps: "." })); /* saces in dist folder */
}

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
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    series(scssTask, jsTask, browsersyncReload)
  );
}

// * default gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
