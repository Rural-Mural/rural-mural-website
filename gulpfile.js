const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task('css', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});
