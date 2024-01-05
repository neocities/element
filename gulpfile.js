const gulp = require('gulp');
const uglify = require('gulp-uglify');
const pump = require('pump');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const fs = require('fs');

const pkg = JSON.parse(fs.readFileSync('./package.json'));

function minifyjs(cb) {
  pump([
    gulp.src('element.js'),
    uglify(),
    concat('element-' + pkg.version + '.min.js'),
    gulp.dest('dist')
  ],
  cb);
}

function minifycss() {
  return gulp.src('element.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('element-' + pkg.version + '.min.css'))
    .pipe(gulp.dest('dist'));
}

// Define tasks
gulp.task('minifyjs', minifyjs);
gulp.task('minifycss', minifycss);

// Default task
gulp.task('default', gulp.series('minifyjs', 'minifycss'));
