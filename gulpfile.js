var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    stylus      = require('gulp-stylus'),
    rename      = require("gulp-rename"),
    minify      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync');

gulp.task('default', ['jade', 'bootstrap','browser-sync'], function() {
    gulp.watch([ 'lib/*.jade',
                 'lib/layout/layout.jade',
                 'lib/layout/body/*.jade',
                 'lib/layout/body/blocks/*.jade',
                 'lib/layout/head/*.jade'
               ], ['jade']);
});

//- editing bootstrap
gulp.task('bootstrap', ['bootstrapcss', 'bootstrapjs', 'movefonts']);

//- move all the bootstrap fonts
gulp.task('movefonts', function () {
    gulp.src('bower_components/bootstrap-stylus/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'))
});

//- Get bootstrap.styl file and render
gulp.task('bootstrapcss', function () {
    gulp.src('bower_components/bootstrap-stylus/stylus/bootstrap.styl')
        .pipe(stylus())
        .pipe(minify())
        .pipe(rename("bootstrap.min.css"))
        .pipe(gulp.dest('dist/assets/css'));
});

//- Concat all Bootstrap js  file and render
gulp.task('bootstrapjs', function () {
    gulp.src('bower_components/bootstrap-stylus/js/*.js')
        .pipe(concat('bootstrap.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

//- compile all the jade function
gulp.task('jade', function () {
    var YOUR_LOCALS = {};

  gulp.src('lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream:true}));
});

//- run the browsersync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
});