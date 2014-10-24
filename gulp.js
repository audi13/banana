var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('templates', function() {
  var YOUR_LOCALS = {};

  gulp.src('./lib/*.jade')
    .pipe(jade({
      locals: JSON.parse(fs.readFileSync(o.views.data, 'utf8'))
    }))
    .pipe(gulp.dest('./dist/'))
});