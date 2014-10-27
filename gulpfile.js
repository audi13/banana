var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename = require("gulp-rename"),
    minify = require('gulp-minify-css');

gulp.task('default', ['jade', 'bootstrap']);

//- Get one .styl file and render
gulp.task('bootstrap', function () {
    gulp.src('bower_components/bootstrap-stylus/stylus/bootstrap.styl')
        .pipe(stylus())
        .pipe(minify())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest('dist/assets/css'));
});

//- compile all the jade function
gulp.task('jade', function () {
    var YOUR_LOCALS = {};

  gulp.src('lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dist/'));
});