var gulp = require('gulp')
var uglify = require('gulp-uglify')
var pump = require('pump')
var cleanCSS = require('gulp-clean-css')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var fs = require('fs')

var pkg = JSON.parse(fs.readFileSync('./package.json'))

gulp.task('minifyjs', function (cb) {
  pump([
        gulp.src('element.js'),
        uglify(),
        concat('element-'+pkg.version+'.min.js'),
        gulp.dest('dist')
    ],
    cb
  )
})

gulp.task('minifycss', function() {
  return gulp.src('element.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(concat('element-'+pkg.version+'.min.css'))
    .pipe(gulp.dest('dist'))
})

gulp.task('default', ['minifyjs', 'minifycss']);
