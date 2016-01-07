'use strict';
var gulp = require('gulp'),
  cssmin = require('gulp-cssmin'),
  rename = require('gulp-rename'),
     del = require('del'),
imagemin = require('gulp-imagemin'),
imageResize = require('gulp-image-resize'),
pngquant = require('imagemin-pngquant'),
imageminJpegRecompress = require('imagemin-jpeg-recompress');

gulp.task('minifyCSS', function(){
  gulp.src("css/style.css")
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("css"));
});


/* Want these image widths: 600px, 960px, 1440px, 1800px, 3600px
  highest average original size for all */

gulp.task('resizeFull', function () {
  return gulp.src('img_original/*')
    .pipe(imageResize({
      height: 450,
      upscale : false,
      imageMagick: true
    }))
    .pipe(rename({suffix: '_full'}))
    .pipe(gulp.dest('img'));
});

gulp.task('resizeThumb', function () {
  return gulp.src('img_original/*')
    .pipe(imageResize({
      width : 215,
      upscale : false,
      imageMagick: true
    }))
    .pipe(rename({suffix: '_thumb'}))
    .pipe(gulp.dest('img'));
});


// After images resized need to be optimized or compressed using an algorithm that decides
// what data to keep and what it can throw away while still maintaining visual integrity.
// Plus need to get rid of extra metadata added during imageResize.
gulp.task('optimize', ['resizeFull', 'resizeThumb'], function () {
  return gulp.src('img/*')
    .pipe(imagemin({
      use:[imageminJpegRecompress({
        loops:4,
        min: 60,
        max: 95,
        quality:'high'
      })]
    }))
    .pipe(gulp.dest('img'));
});

gulp.task('watchFiles', function(){
  gulp.watch('img_original/*', ['resizeFull', 'resizeThumb']);
});

// creating clean task
gulp.task('clean', function(){
  del(['dist', 'img', 'css/style.min.css']);
});

gulp.task("build", ['optimize', 'minifyCSS'], function(){
  return gulp.src([
    "css/style.min.css",
    "index.html",
    "img/**"], { base: "./"})
      .pipe(gulp.dest("dist"));
});

gulp.task('serve', ['watchFiles']);

// we make build task a depend. of default task so
// can just run gulp
gulp.task("default", ["clean"], function(){
  gulp.start('build')
});










