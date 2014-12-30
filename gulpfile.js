var gulp = require('gulp'),
  jshint = require('gulp-jshint'),
  gutil = require('gutil'),
  gitmodified = require('gulp-gitmodified'),
  symlink = require('gulp-symlink'),
  jscs = require('gulp-jscs');

gulp.task('githooks', function(){
  return gulp.src([
    '**/*.js',
    '!node_modules/**'
  ])
  .pipe(gitmodified('modified'))
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail'))
  .pipe(jscs())
  .on('error', gutil.log);
});


gulp.task('symlink-githooks', function (){
  return gulp.src('.pre-commit')
    .pipe(symlink('./.git/hooks/pre-commit', {force: true}));
});