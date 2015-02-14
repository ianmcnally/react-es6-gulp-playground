var gulp = require('gulp');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var source = require('vinyl-source-stream');

gulp.task('compile', function(){
  return browserify('./src/app.jsx')
    .transform(to5ify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/javascript'));
});

gulp.task('default', ['compile']);