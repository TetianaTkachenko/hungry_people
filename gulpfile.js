'use strict';
var gulp = require('gulp');
var gulpSass = require('gulp-sass');
var nodeSass = require('node-sass');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');

var sass = gulpSass(nodeSass)

var paths = {
    styles: {
        src: './style/**/*.scss',
        dest: './style/dist/'
    }
}

function scss() {
    return gulp.src(paths.styles.src)
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest));
}

exports.scss = scss

function watch() {
    scss()
    gulp.watch(paths.styles.src, scss);
}

exports.watch = watch;
