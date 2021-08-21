const { src, dest, watch, series } = require('gulp');

const gulpSass = require("gulp-sass");
const nodeSass = require("node-sass");
const concat = require('gulp-concat');
const sass = gulpSass(nodeSass);
const path = {
    js: './src/js/**/*.js',
    scss: './src/scss/*.scss'
}

function css() {
    return src(path.scss)
        .pipe(sass())
        .pipe(dest('./build/css'));
}

function javascript() {
    return src(path.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function watchArchivos() {
    watch('./src/scss/**/*.scss', css);
    watch(path.js, javascript);
}
exports.css = css;
exports.watchArchivos = watchArchivos;
exports.default = series(watchArchivos, css, javascript);