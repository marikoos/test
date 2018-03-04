let gulp = require('gulp'),
	file = require('gulp-file');

gulp.task('message1', function(){
	console.log("Its working");
});
gulp.task('message2', function(){
	console.log("This is a second message");
});
gulp.task('changed', function(){
	console.log("File edited");
});
// gulp.task('js', function(){
// 	var str = primus.library();

// 	return gulp.src("")
// });

gulp.task('watch', function(){
	gulp.watch('./index.html', ['changed']);
});

gulp.task('default', ['message1','message2']);