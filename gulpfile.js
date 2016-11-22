var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function() {
  console.log('default started');
});

gulp.task('sass', function() {
  return gulp.src('./resources/scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./dist/css/'))
});

gulp.task('watch', function() {
  gulp.watch('./resources/scss/*.scss', ['sass']);
});