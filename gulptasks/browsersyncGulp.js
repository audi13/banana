//- Run the browsersync
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });
});