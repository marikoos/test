let gulp = require('gulp'),
	// sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	open = require('gulp-open');


gulp.task("move", function(){
  console.log("TEMPLATE CREATED ON THE DESKTOP");
  gulp.src('./Staging/485\ Design/dist/**')
    .pipe(gulp.dest('./Production/485\ Design\ (Production)'));
});

// gulp.task('sass', function(){
// 	gulp.src('./Staging/485\ Design/src/css/*.scss')
// 		.pipe(sass({outputStyle: "compressed"}))
// 		.pipe(gulp.dest('./Staging/485\ Design/dist/css'));
// });

gulp.task('js', function(){
	gulp.src('./Staging/485\ Design/src/js/*.js')
		.pipe(concat('full.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./Staging/485\ Design/dist/js'));
});

gulp.task('watch', function(){
	// gulp.watch('./Staging/485\ Design/src/css/*.scss', ['sass']);
	gulp.watch('./Staging/485\ Design/src/js/*.js', ['js']);
	gulp.src('./Staging/485\ Design/dist/index.html')
		.pipe(open());
});