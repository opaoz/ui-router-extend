'use strict';
/**
 * @file gulpfile.js
 *
 * @author Vladimir_Levin
 * @date 12.10.2015
 */

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open');

gulp.task('open', function () {
    gulp.src('')
        .pipe(open({uri: 'http://localhost:3000'}));
});

gulp.task('connect', function () {
    connect.server({
        root: 'app',
        livereload: true,
        port: 3000
    });
});

gulp.task('html', function () {
    gulp.src('./app/*.*')
        .pipe(connect.reload());
});

gulp.task('watch', function () {
    gulp.watch(['./app/*.html'], ['html']);
});

gulp.task('default', ['connect', 'open', 'watch']);
