const { src, dest, series, parallel, watch} = require('gulp');
const browsersync = require('browser-sync').create();
const concat      = require('gulp-concat');
const cleanCSS    = require('gulp-clean-css');

function browserSync() {
    browsersync.init({
        server: { baseDir: 'dist/'},
        notify: false,
        online: true
    })
}

function copy() {
    src('src/index.html')
        .pipe(dest('dist/'))
}

function styles(){
    src('src/scss/**/*.scss')
        .pipe(concat('index.css'))
        .pipe(cleanCSS())
        .pipe(dest('dist/css/'))
        .pipe(browsersync.stream())
}


function startWatch(){
    watch('src/scss/**/*.scss', styles)
    watch('src/**/*.html').on('change', browsersync.reload)
}

exports.browsersync = browserSync;
exports.styles      = styles;
exports.default     = parallel(copy, styles, browserSync, startWatch);