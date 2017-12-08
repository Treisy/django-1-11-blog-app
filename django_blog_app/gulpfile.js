var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src(['styles/*.scss'])
        .pipe(sass())
        .pipe(autoprefixer({browsers:['last 4 versions']}))
        .pipe(minifyCss({compatibility: 'ie9'}))
        .pipe(gulp.dest('blog/static/css'));
});

gulp.task('js', function() {
    return gulp.src(['bower_components/bootstrap/dist/js/bootstrap.min.js', 'bower_components/jquery/dist/jquery.min.js', 'bower_components/tether/dist/js/tether.min.js'])
        .pipe(gulp.dest('blog/static/js'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    gulp.watch(['styles/*.scss'], ['sass']);
    gulp.watch('js');
});

gulp.task('default', ['serve']);