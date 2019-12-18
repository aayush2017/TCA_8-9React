const gulp = require('gulp');
const { src, dest, series } = require('gulp');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function cssMin() {
	return gulp.src('./src/scss/**/*.scss')
		.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/dist/css'))
		.pipe(cleanCSS({compatibility: 'ie8'}))
    	.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./src/dist/css'));
}

function watchCSS() {
	gulp.watch('./src/scss/**/*.scss').on('change', series(cssMin));	
}
exports.cssMin = cssMin;
exports.watchCSS = watchCSS;
// gulp watchCSS