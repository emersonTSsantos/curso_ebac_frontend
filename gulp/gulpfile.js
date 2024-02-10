//executando automações publicas e privadas 
//executando funções em séries usando o camando gulp.series e aplicando as funções que estarão dentro da automação
/*

const gulp = require('gulp');

function funcaoPadrao(callback) {
    console.log('executando via gulp');
    callback();
}

function dizOi(callback) {
    console.log('olá,gulp');
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('tchau gulp');
}

exports.default = gulp.series(funcaoPadrao, dizOi);
exports.dizOi = dizOi


*/

const gulp = require('gulp');
const sass = require('gulp-sass')(require ('sass'));

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/styles'));
}

function funcaoPadrao(callback) {
    setTimeout (function() {

        console.log('executando via gulp');
        callback();

    }, 2000)
    
}

function dizOi(callback) {
    console.log('olá,gulp');
    dizTchau();
    callback();
}

function dizTchau() {
    console.log('tchau gulp');
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi
exports.sass = compilaSass;




