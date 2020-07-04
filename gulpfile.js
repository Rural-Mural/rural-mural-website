const gulp = require("gulp");
const sass = require("gulp-sass");

sass.compiler = require('node-sass');

gulp.task('css', function() {
  return gulp.src('./assets/sass/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' })
    .on('error', sass.logError))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('watch', function() {
  gulp.watch('./assets/sass/**/*.scss', gulp.series('css'));
});
