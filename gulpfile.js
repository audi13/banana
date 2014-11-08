var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    less        = require('gulp-less'),
    rename      = require("gulp-rename"),
    minify      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    browserSync = require('browser-sync');

//- Default task
gulp.task('default', ['jade', 'assets', 'browser-sync'], function () {
    gulp.watch([ 'lib/*.jade',
                 'lib/layout/layout.jade',
                 'lib/layout/body/*.jade',
                 'lib/layout/body/blocks/*.jade',
                 'lib/layout/head/*.jade'
               ], ['jade']);
});

//- Editing bootstrap
gulp.task('assets', ['css', 'bootstrapjs', 'jquery', 'movefonts']);

//- Move all the bootstrap fonts
gulp.task('movefonts', function () {
    gulp.src('bower_components/bootstrap/fonts/*')
        .pipe(gulp.dest('dist/assets/fonts'))
});

//- Move jQuery dist files
gulp.task('jquery', function () {
    gulp.src('bower_components/jquery/dist/jquery.min.*')
        .pipe(gulp.dest('dist/assets/js'))
});

//- Get custom LESS file and render
gulp.task('css', function () {
    gulp.src('lib/assets/less/layout.less')
        .pipe(less())
        .pipe(minify())
        .pipe(rename("layout.min.css"))
        .pipe(gulp.dest('dist/assets/css'));
});

//- Concat all Bootstrap js  file and render
gulp.task('bootstrapjs', function () {
    gulp.src('bower_components/bootstrap/js/*.js')
        .pipe(concat('bootstrap.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'));
});

//- Compile all the Jade files
gulp.task('jade', function () {
    var YOUR_LOCALS = {};

  gulp.src('lib/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream:true}));
});

//- Run the browsersync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
});