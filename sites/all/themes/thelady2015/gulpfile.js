//*********** IMPORTS *****************
var gulp 					= require('gulp'),
		globbing      = require('gulp-css-globbing'),
		sass 					= require('gulp-sass'),
		watch 				= require('gulp-watch');


//Gulp compling my Sass files into CSS
gulp.task('sass', function (){
	 gulp.src('sass/**/*.scss')
	 .pipe(globbing({ extensions: ['.scss'] }))
	 .pipe(sass())
	 .pipe(gulp.dest('css/')); //save the css to this destination
});


//Gulp performing watch task
gulp.task('watch',['sass'], function(){
	gulp.watch('sass/**/*.scss', ['sass']);
});

//Gulp's default task
gulp.task('default',['watch']);


