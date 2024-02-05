
let gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')),
rename = require('gulp-rename');
const browserSync = require('browser-sync');

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss')
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(rename({suffix : '.min'}))
            .pipe(gulp.dest('app/css'))
            .pipe(browserSync.reload({stream: true}))
});  

gulp.task('html', function(){
    return gulp.src('app/*.html')
    .pipe((browserSync.reload({stream: true})))
});

gulp.task('js', function(){
    return gulp.src('app/js/*.js')
    .pipe((browserSync.reload({stream: true})))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "app/"
    });
});

gulp.task('watch', function(){
    gulp.watch('app/scss/style.scss', gulp.parallel('sass'))
    gulp.watch('app/*.html', gulp.parallel('html'))
    gulp.watch('app/ls/*.js', gulp.parallel('js'))
});

gulp.task('default', gulp.parallel('sass', 'watch', 'browser-sync'))