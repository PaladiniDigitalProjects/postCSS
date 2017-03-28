var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnext = require('cssnext');
var precss = require('precss');
jade = require('gulp-jade');

gulp.task('css', function () {
  var processors = [
  autoprefixer({browsers: ['last 2 version']}),
  cssnext,
  precss
];

return gulp.src('./src/*.css')
  .pipe(postcss(processors))
  var precss = require('precss')
  .pipe(postcss([ autoprefixer() ]))
  .pipe(gulp.dest('./dest'));
});

// run this task by typing in gulp jade in CLI
gulp.task('jade', function() {
    return gulp.src('src/jade_templates/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('./dest/html')); // tell gulp our output folder
});

gulp.task('watch', function () {  
    gulp.watch('./src/*.css', ['css']);
    gulp.watch('./src/jade_templates/*.jade', ['jade']);
       
        // .on('change', function(event) {
        //     console.log(`Watch: ${event.path} was ${event.type}.`);
        // });
});