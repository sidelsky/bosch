var gulp = require('gulp'),
		compass = require('gulp-compass'),
		images = require('gulp-image'),
		order = require("gulp-order"),
		uglify = require('gulp-uglify'),
		concat_js = require('gulp-concat'),
		plumber = require('gulp-plumber'),
		minify_styles = require('gulp-minify-css'),
		browserSync = require('browser-sync'),
		ssi = require('browsersync-ssi'),
		reload = browserSync.reload;

//Compass
gulp.task('compass', function() {
	gulp.src('sass/**/*.scss')
	.pipe(plumber())
	.pipe(compass({
		config_file: 'config.rb',
		sass: 'sass',
		css: 'build/styles/unminified-styles'
	}))
	.pipe(plumber.stop())
	.pipe(gulp.dest('build/styles/unminified-styles'))
	.pipe(reload({stream: true}))
});

//Minify styles
gulp.task('minify_styles', function(){
	gulp.src('build/styles/unminified-styles/app.css')
	.pipe(minify_styles())
	.pipe(gulp.dest('build/styles'));
});

//Images
gulp.task('images', function(){
	gulp.src('images/**/*')
	.pipe(images())
	.pipe(gulp.dest('build/images'));
});

//Minify (uglify) & concatenate (concat_js) Javascript files
gulp.task('javascript', function(){
	gulp.src('javascript/*.js') //Where js found
	.pipe(plumber())
	.pipe(order([
    //"javascript/vendor/modernizr-2.6.2.min.js",
    //"javascript/vendor/jquery-1.10.2.min.js",
    "javascript/plugins.js",
    "javascript/main.js"
    ], {base: '.'}))
		.pipe(concat_js('main.min.js')) //Concatinate js
		.pipe(uglify()) // Minify js
		.pipe(gulp.dest('build/javascript/')); //Desination
	});

	//Copy files
	gulp.task('copy', function() {
	
		gulp.src(['javascript/vendor/*.js'])
		.pipe(gulp.dest('build/javascript/vendor'))

		gulp.src(['fonts/**/*'])
		.pipe(gulp.dest('build/fonts'))

		gulp.src(['images/**/*'])
		.pipe(gulp.dest('build/images'))

		gulp.src(['*.shtml','*.html','*.php'])
		.pipe(gulp.dest('build/'))

});

//Watch
gulp.task('watch', function(){
	gulp.watch('sass/**/*.scss', ['compass'])
	gulp.watch('build/styles/unminified-styles/app.css', ['minify_styles'])
	gulp.watch('javascript/*.js', ['javascript']);
	gulp.watch('fonts/**/*', ['copy']);
	gulp.watch('*.shtml', ['copy']);
	gulp.watch('*.shtml').on('change', browserSync.reload);
		//gulp.watch('images/**/*', ['images']);
});

//Browser sync
gulp.task('browser-sync', function() {
	// browserSync.init(['build/*.html','sass/**/*.scss','javascript/*.js','images/*'], {
	// 	port: 8080,
	// 	server: {
	// 		baseDir: "./build"
	// 	}
	// });
	browserSync.init(['build/**/**'],{
		open: false,
		server: {
			baseDir: ['build'],
			middleware: ssi({
				baseDir: __dirname + '/build',
				ext: '.shtml',
				version: '1.4.0',
				ghostMode: {
				  clicks: true,
				  forms: true,
				  scroll: true
				},
			})
		},
	});

});

gulp.task('default', ['compass','minify_styles','images','javascript','copy','watch','browser-sync']);