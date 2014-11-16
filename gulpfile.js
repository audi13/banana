var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    less        = require('gulp-less'),
    rename      = require("gulp-rename"),
    minify      = require('gulp-minify-css'),
    uglify      = require('gulp-uglify'),
    concat      = require('gulp-concat'),
    requireDir = require('require-dir'),
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

//- Compiling every assets
gulp.task('assets', ['css', 'bootstrapjs', 'jquery', 'movefonts']);