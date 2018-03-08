let gulp = require('gulp'),
	sass = require('gulp-sass'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');


gulp.task("move", function(){
  console.log("TEMPLATE CREATED ON THE DESKTOP");
  gulp.src('./Staging/485\ Design/**')
    .pipe(gulp.dest('./Production/485\ Design\ (Production)'));
});

gulp.task('sass', function(){
	gulp.src('./Staging/485\ Design/css/*.scss')
		.pipe(sass({outputStyle: "compressed"}))
		.pipe(gulp.dest('./Staging/485\ Design/css'));
});

gulp.task('scripts', function(){
	gulp.src('./Staging/485\ Design/js/*.js')
		.pipe(concat('Full.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./Staging/485\ Design/js'));
});

gulp.task('clean', function(){
	gulp.src(['./Production/485\ Design\ (Production)/**/**/*.scss','./Production/485\ Design\ (Production)/**/**/scripts.js','./Production/485\ Design\ (Production)/**/**/jquery.min.js'])
		.pipe(clean({force: true}));
});

gulp.task('watch', function(){
	gulp.watch('./Staging/485\ Design/css/*.scss', ['sass']);
});

gulp.task('default', ['scripts']);