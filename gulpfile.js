const gulp = require('gulp');
const plumber = require('gulp-plumber');
const serve = require('gulp-serve');

const merge = require('gulp-merge');
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const cleanCss = require('gulp-clean-css');
const autoprefix = require('gulp-autoprefixer');


/*
Concatenates and minifies all custom javascript (in scripts/)
Concatenates all vendor scripts (in vendor/)
Outputs build/app.min.js
*/
function concatScripts() {

	return merge(
		// Load custom javascript and minify it
		gulp.src('scripts/*.js')
			.pipe(plumber())
			.pipe(concat('app.js'))
			.pipe(babel({presets: ['babili']})) // Use Babili to minify es6 code without transpiling, because gulp-uglify doesn't support es6 yet
			,

		// Load third-party javascript files and just concatenate them
		gulp.src('vendor/*.js')
			.pipe(plumber())
		)

		.pipe(concat('app.min.js'))
		.pipe(gulp.dest('build/'));
}


/*
Concatenates, prefixes and minifies all css files (in stylesheets/)
Outputs build/styles.css
*/
function concatStylesheets() {

	return merge(
		// Load custom css, prefix it and minify it
		gulp.src('stylesheets/*.css')
			.pipe(plumber())
			.pipe(concat('styles.css'))
			.pipe(autoprefix({
				browsers: ['last 2 versions', '> 2%']
			}))
			.pipe(cleanCss())
		,

		// Load third-party css and just concatenate it
		gulp.src('vendor/*.css')
			.pipe(plumber())
		)

		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('build/'));
}

// Build task that runs both functions
gulp.task('build', gulp.parallel(concatScripts, concatStylesheets))



// Watch files for changes
function watchFiles() {
	gulp.watch(['scripts/*.js', 'vendor/*.js'], concatScripts);
	gulp.watch('stylesheets/*.css', concatStylesheets);
}

// Gulp task to watch for changes and start a static file server
gulp.task('default', gulp.parallel('build', watchFiles, serve({
	root: '.',
	port: 8080,
	hostname: '0.0.0.0'
})))
