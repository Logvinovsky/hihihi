const { src, dest, series, parallel, watch} = require('gulp');
const browsersync  = require('browser-sync').create();
const concat       = require('gulp-concat');
const cleanCSS     = require('gulp-clean-css');
const imagemin     = require('gulp-imagemin');
const newer        = require('gulp-newer');
const autoprefixer = require('gulp-autoprefixer');
const sass         = require('gulp-sass');


function browserSync() {
    browsersync.init({
        server: { baseDir: 'dist/'},
        notify: false,
        online: true
    })
}

function copy() {
   return src('src/index.html')
        .pipe(concat('index.html'))
        .pipe(dest('dist/'))

}

function styles(){
   return src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('index.css'))
        .pipe(autoprefixer({
           overrideBrowserslist: ['last 2 versions']
        }))
        .pipe(cleanCSS())
        .pipe(dest('dist/css/'))
        .pipe(browsersync.stream())
}

// function reload() {
//     browsersync.reload();
// }

function images() {
    return src('src/images/**/*')
        .pipe(newer('dist/images/'))
        .pipe(imagemin())
        .pipe(dest('dist/images/'))
}

function startWatch(){
    watch('src/scss/**/*.scss', styles);/*series(styles, reload)*/
    watch(['src/images/**/*', 'dist/images/**/*'], images);
    watch('src/**/*.html', copy);/*series(copy, reload)*/
    watch('dist/**/*.html').on('change', browsersync.reload);

}

exports.browsersync = browserSync;
exports.styles      = styles;
exports.images      = images;
exports.copy        = copy;
exports.default     = parallel(copy, styles, images, browserSync, startWatch);