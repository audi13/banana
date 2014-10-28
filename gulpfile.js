var gulp = require('gulp'),
    jade = require('gulp-jade'),
    stylus = require('gulp-stylus'),
    rename = require("gulp-rename"),
    minify = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('default', ['jade', 'bootstrapcss', 'bootstrapjs']);

//- Get one .styl file and render
gulp.task('bootstrapcss', function () {
    gulp.src('bower_components/bootstrap-stylus/stylus/bootstrap.styl')
        .pipe(stylus())
        .pipe(minify())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('bootstrapjs', function () {
    gulp.src('bower_components/bootstrap-stylus/js/*.js')
        .pipe(uglify())
        .pipe(concat('bootstrap.js'))
        .pipe(gulp.dest('dist/assets/js'));
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