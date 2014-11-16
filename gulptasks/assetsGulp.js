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