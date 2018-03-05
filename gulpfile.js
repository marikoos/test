let gulp = require('gulp');
let clean = require('gulp-clean');
let connect = require('gulp-connect');
let mkFile = require('gulp-file');

gulp.task('test', function(){
  console.log("Gulp is working!");
})

gulp.task("default", function(){
  console.log("TEMPLATE CREATED ON THE DESKTOP");
  gulp.src(['Site_Template/**/**'])
    .pipe(gulp.dest('../'));
});

gulp.task('clean', function () {
	console.log("All HTML files within 'dist' folder deleted");
    gulp.src('dist/code')
        .pipe(clean());
});

