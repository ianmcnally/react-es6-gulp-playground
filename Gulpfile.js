require('harmonize')();

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var jest = require('gulp-jest');

gulp.task('compile', function(){
  return browserify('./src/app.jsx')
    .transform(babelify)
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./dist/javascript'));
});

gulp.task('jest', function(){
  gulp.src('src/**/*-test.js')
    .pipe(jest({
      rootDir : 'src',
      scriptPreprocessor : "../node_modules/babel-jest",
      testFileExtensions : ["es6", "js"],
      moduleFileExtensions : ["js", "json", "es6"],
      unmockedModulePathPatterns : ["./node_modules/react"]
    }));
});

gulp.task('default', ['compile']);

gulp.task('test', ['jest']);