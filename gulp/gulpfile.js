const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sass({
            outputStyle:'compressed'
        }).on('error', sass.logError))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeImagens() {
    return gulp.src('./source/imagens/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/imagens'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false} , gulp.series(compilaSass) );
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false} , gulp.series(comprimeJavaScript) );
    gulp.watch('./source/imagens/*', {ignoreInitial: false} , gulp.series(comprimeImagens) );
}






