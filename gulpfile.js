// Credits: https://github.com/thecodercoder/fem-dklt-toggle/blob/main/gulpfile.js

// Initialize modules
const {
  src, dest, watch, series,
} = require('gulp');

// backlog:
/*
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano'); */ /* enable when scss is ready \
*/
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();
const gulpCleanCss = require('gulp-clean-css');
/* to be assigned — seems terser does this well for js, don't know about css @concat */
// const concat = require("gulp-concat");

// Use dart-sass for @use
// sass.compiler = require('dart-sass');

// backlog:
// Sass Task
/* function scssTask() {
  return (
    src('src/scss/style.scss', { sourcemaps: true })
    // .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(
      sass({
          outputStyle: 'nested',
        }).on('error', sass.logError)
        )
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }))
        );
} */ /* enable when scss is ready */

/* uses fiber — which seems out of date */
// .pipe(sass({includePaths: ['./node_modules'],fiber: Fiber,}).on('error', sass.logError))

// Gulp Clean CSS Task
function gulpCleanCssTask() {
  return src('src/css/*.css', { sourcemaps: true })
    .pipe(gulpCleanCss())
    .pipe(dest('dist', { sourcemaps: '.' }));
}
// JavaScript Task
function jsTask() {
  return src(['src/js/app.js', 'src/js/theme-toggle.js'], { sourcemaps: true })
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
}

// Browser-sync
function browserSyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: '.',
    },
    notify: {
      styles: {
        top: 'auto',
        bottom: '0',
      },
    },
  });
  cb();
}

// Browser-sync Reload
function browserSyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch('*.html', browserSyncReload);
  watch(
    ['src/scss/**/*.scss', 'src/css/**/*.css', 'src/**/*.js'],
    series(gulpCleanCssTask, jsTask, browserSyncReload),
  ); /* add scssTask when ready */
}

// Default Gulp Task /* $ gulp */
exports.default = series(
  jsTask,
  gulpCleanCssTask,
  browserSyncServe,
  watchTask,
); /* add scssTask when ready */

// Build Gulp Task /* $ gulp build */
exports.build = series(gulpCleanCssTask, jsTask); /* add scssTask when ready */

// ------------------------------------------------------------------

// ------------------------------------------------------------------
// archive
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// 20220423120450
// Lint Task
/* (－‸ლ) for your own sake, please ditch gulp and just invoke eslint using npm run-scripts :-) */
/* https://githubhot.com/repo/airbnb/javascript/issues/2545 */
// function lintTask() {
//   return (
//     gulp
//       .src(['src/**/*.js', '!node_modules/**'])
//       // eslint() attaches the lint output to the "eslint" property
//       // of the file object so it can be used by other modules.
//       .pipe(eslint({}))
//       // eslint.format() outputs the lint results to the console.
//       // Alternatively use eslint.formatEach() (see Docs).
//       .pipe(eslint.format())
//       // To have the process exit with an error code (1) on
//       // lint error, return the stream and pipe to failAfterError last.
//       .pipe(eslint.failAfterError())
//   );
// }

// ------------------------------------------------------------------
// 20220423103351
// // const esLinters = [
// //   'src/**/*.js',
// //   '!src/js/vendor/**/*.js',
// //   '!src/js/custom.js',
// // ];
/* const elLintFormatOnSave = () => {
  return src(esLintFormatOnSave)
    .pipe(babel())
    .pipe(terser())
    .pipe(dest('dist'));
}; */

// ------------------------------------------------------------------
// 20220421043400
// const { src, dest, watch, series, parallel } = require('gulp');
// const browsersync = require('browser-sync').create();
// const cleanCss = require("clean-css");
// var input = "a{font-weight:bold;}";
// var options = {/* options */};
// var output = new CleanCSS(options).minify(input);

// https://www.toptal.com/javascript/optimize-js-and-css-with-gulp
// const gulpCleanCss = require('gulp-clean-css');
// const concat = require("gulp-concat"); /* to be assigned */
// const cssnano = require("cssnano"); /* to be assigned when using scssTask */

// const gulp = require("gulp");
// const postcss = require("gulp-postcss"); /* to be assigned when using scssTask */
// const sass = require("gulp-sass")(require("sass")); /* to be assigned when using scssTask */
// const terser = require('gulp-terser');
/* To improve Dart Sass compilation speed, we can use a package called fibers. */
// const Fiber = require('fibers');

// cleanCss task
/* function cleanCssTask() {
  return src("dist/css/*.css", { sourcemaps: true })
    .pipe(cleanCss())
    .pipe(dest("dist/css/", { sourcemaps: "." }));
} */
// gulp-clean-css task /* gulp recommends clean-css */
/* function gulpCleanCssTask() {
  return src('src/css/*.css', { sourcemaps: true })
    .pipe(gulpCleanCss())
    .pipe(dest('dist', { sourcemaps: '.' }));
} */
// javascript task
/* function jsTask() {
  return src(['src/js/app.js', 'src/js/theme-toggle.js'], { sourcemaps: true })
    .pipe(terser())
    .pipe(dest('dist', { sourcemaps: '.' }));
} */
// sass task /* nodestream returned usein gsrc function called gulp and read app/style..... */
// function scssTask() {
//   return src("src/scss/style.scss", { sourcemaps: true })
// //  .pipe(sass())
//      .pipe(
//            sass({
//              includePaths: ['./node_modules'],
//              fiber: Fiber
//            })
//              .on('error', sass.logError)
//          )
//     .pipe(postcss([cssnano()])) /* minifies it */
//     .pipe(dest("dist", { sourcemaps: "." }));
// }
// browsersync serve task /* it's not a gulp () so manually init it */
/* function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: './',
    },
  });
  cb();
} */
// browsersync reload task
/* function browsersyncReload(cb) {
  browsersync.reload();
  cb();
} */
// watch task
// // function watchTask()
// // {watch('**/*.html').on('change', browsersync.reload);
// // watch(['src/css/**/*.css', 'src/js/**/*.js'],
// // series(gulpCleanCssTask, jsTask, browsersyncReload));}
// default gulp task
/* exports.default = series(browsersyncServe, gulpCleanCssTask, jsTask, watchTask); */

// ------------------------------------------------------------------
// 20220420150031
// /* https://betterprogramming.pub/getting-started-with-storybook-without-a-javascript-framework-c2968d3f3d9f */

// ------------------------------------------------------------------
// 20220420145735
// /* https://www.smashingmagazine.com/2018/07/pattern-library-first-css/ */
/*
  const fractal = require("./fractal.js");
  const logger = fractal.cli.console;
  const sassGlob = require("gulp-sass-glob");
  const plumber = require("gulp-plumber");
  const notify = require("gulp-notify");
  const path = require("path");
*/

// ------------------------------------------------------------------
// 20220419120000
/*
  var gulp = require("gulp");
  var browserSync = require("browser-sync").create();
  var reload = browserSync.reload;
*/

/* gulp.task("default", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  }); */
// // gulp.watch("**/*").on("change", reload);
