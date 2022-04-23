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
