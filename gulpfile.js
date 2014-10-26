var gulp = require('gulp');
var jade = require('gulp-jade');
var stylus = require('../');

gulp.task('default', ['jade', 'bootstrap'] {
  
});

//- Get one .styl file and render
gulp.task('bootstrap', function () {
    gulp.src('bower_components/bootstrap-stylus/stylus/bootstrap.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/assets/css/'));
});

// Set linenos
gulp.task('linenos', function () {
    gulp.src('./css/linenos.styl')
        .pipe(stylus({linenos: true}))
        .pipe(gulp.dest('./css/build'));
});

gulp.task('jade', function () {
    var YOUR_LOCALS = {};

    gulp.src('./lib/*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest('dist/'))
}