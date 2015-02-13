var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('compile', function(){
  gulp.src('src/**/*.jsx')
    .pipe(react({harmony : true}))
    .pipe(gulp.dest('dist/javascript'));
});

gulp.task('default', ['compile']);