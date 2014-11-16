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