'use strict';

var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-dart-sass');

gulp.task('pug', function() {
  return gulp.src('./site_start/index.pug')
    .pipe(pug({doctype: 'html', pretty: false}))
    .pipe(gulp.dest('./site_end'));
 });

gulp.task('sass', function () {
  return gulp.src('./site_start/styles.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./site_end'));
});