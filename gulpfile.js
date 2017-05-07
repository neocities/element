var gulp = require('gulp')
var uglify = require('gulp-uglify')
var pump = require('pump')
var cleanCSS = require('gulp-clean-css')
var concat = require('gulp-concat');
var rename = require('gulp-rename');

gulp.task('minifyjs', function (cb) {
  pump([
        gulp.src('element.js'),
        uglify(),
        concat('element.min.js'),
        gulp.dest('.')
    ],
    cb
  )
})

gulp.task('minifycss', function() {
  return gulp.src('element.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('element.min.css'))
    .pipe(gulp.dest('.'))
})

gulp.task('default', ['minifyjs', 'minifycss']);
