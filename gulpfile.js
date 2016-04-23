var gulp = require('gulp-help')(require('gulp'));

//helpers
var gutil = require('gulp-util');
var globby = require('globby');

// build
var browsersync = require('browser-sync').create();

// css / js / img / lint
var eslint = require('eslint/lib/cli');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var base64 = require('gulp-base64');
var imagemin = require('gulp-imagemin');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var pngquant = require('imagemin-pngquant');
var flatten = require('gulp-flatten');

// vinyl
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');

// ify
var browserify = require('browserify');
var babelify = require('babelify');
var watchify = require('watchify');

// files
var packageJSON = require('./package.json');

require('babel-core/register');

// Listen Port for browsersynce proxy
var LISTEN_PORT = '8080';
var BROWSERSYNC_PROXY = "127.0.0.1:" + LISTEN_PORT;

// Directory
var DIST_DIRECTORY = './assets';
var JS_DIST = DIST_DIRECTORY + '/js/';
var CSS_DIST = DIST_DIRECTORY + '/css/';
var IMG_DIST = DIST_DIRECTORY + '/img/';

// Files
var LINT_FILES = [
  'src/**/*.js'
];
var JS_WATCH_FILES = [
  'src/**/*.js'
];
var JS_VENDOR = [];
var JS_APP_BUNDLE_ENTRY = 'src/index.js';
var CSS_VENDOR = [];
var SCSS_FILES = [
  'src/**/*.scss'
];
var IMG_FILES = [
  'src/**/*.{png,jpg}'
];

// Bundles
var BUNDLE_NAME = 'app';
var JS_VENDOR_BUNDLE = BUNDLE_NAME + '-vendor.js';
var JS_APP = BUNDLE_NAME + '.js';
var CSS_VENDOR_BUNDLE = BUNDLE_NAME + '-vendor.css';
var CSS_APP = BUNDLE_NAME + '.css';

var buildBrowserifyBundle = function(options) {
  var watch = options.watch || false;
  var entry = options.entry || JS_APP_BUNDLE_ENTRY;
  var output = options.output || CSS_APP;
  var props = {
    entries: entry,
    debug: true,
    // defining transforms here will avoid crashing your stream
    transform: [babelify],
    cache: {}, // required for watchify
    packageCache: {} // required for watchify
  };

  //var b = browserify(props);
  var bundler = watch ? watchify(browserify(props)) : browserify(props);

  var rebundle = function() {
    return bundler.bundle()
    .on('error', gutil.log)
    .pipe(source(output))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(JS_DIST));
  };

  // listen for an update and run rebundle
  bundler.on('update', function() {
    rebundle();
    gutil.log('Rebundle...');
  });
/*
  if (watch) {
    b = watchify(b);
    b.on('update', rebundle.bind(null, b));
  }*/

  return rebundle();
};

/**
 * Default, running `gulp` will bring up the help
*/
gulp.task('default', false, ['help']);

/**
 * Lint
 *
 * run eslint without an additional plugin
*/
gulp.task('lint', 'Run ESLint', function(done) {
  // patterns with the same form as gulp.src(patterns)
  var patterns = LINT_FILES;
  globby(patterns).then(paths => {
    var code = eslint.execute(paths.join(' '));
    if (code) {
      // eslint output already written, wrap up with a short message
      done(new gutil.PluginError('lint', new Error('ESLint error')));
      return;
    }
    done();
  }).catch((err) => {
    done(err);
    return;
  });
});

/**
 * Scripts
 *
 * Look at vendor & app js files, concatenate them and send them to static/js.
 * We then minimize the concatenated file.
*/
gulp.task('js', 'Build js files', ['js:vendor', 'js:app', 'js:min']);

gulp.task('js:dev', 'Build js files', ['js:vendor', 'js:app']);

gulp.task('js:vendor', false, function() {
  return gulp.src(JS_VENDOR)
    .pipe(concat(JS_VENDOR_BUNDLE))
      .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(JS_DIST));
});

gulp.task('js:app', false, function() {
  return buildBrowserifyBundle({
    entry: JS_APP_BUNDLE_ENTRY,
    output: JS_APP
  });
});

gulp.task('js:min', false, ['js:app'], function() {
  return gulp.src([JS_DIST + JS_APP])
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(JS_DIST));
});

gulp.task('js:watch', false, ['lint', 'js:dev'], function() {
  browsersync.reload();
});

/**
 * Stylesheets
 *
 * Look at vendor & app css files, concatenate them and send them to static/css.
 * We then minimize the concatenated file.
*/
gulp.task('css', 'Build css files', ['css:vendor', 'scss:app']);

gulp.task('css:vendor', false, function() {
  return gulp.src(CSS_VENDOR)
  .pipe(concat(CSS_VENDOR_BUNDLE))
  .pipe(sourcemaps.init({ loadMaps: true }))
  .pipe(cssnano())
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(CSS_DIST));
});

gulp.task('scss:app', false, function() {
  return gulp.src(SCSS_FILES)
    .pipe(plumber())
    .pipe(base64({
      maxImageSize: 500 * 1024, // 500kb
      exclude: [/(aui)/]
    }))
    .pipe(concat(CSS_APP))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(plumber.stop())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(cssnano())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(CSS_DIST));
});

gulp.task('css:watch', false, ['img', 'css'], function() {
  browsersync.reload();
});

/**
 * Images
 *
 * Optimization of images and moving them to static folder
*/
gulp.task('img', 'Optimize image files', ['img:min']);

gulp.task('img:min', false, function() {
  return gulp.src(IMG_FILES)
    .pipe(flatten())
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(IMG_DIST));
});


/**
 * Build
*/
gulp.task('build', 'Build all resources', ['js', 'css', 'img']);

gulp.task('build:dev', 'Build all resources', ['lint', 'js:dev', 'css', 'img']);


/**
 * dev
 *
 * Development mode. This will run a server on localhost which will watch files for changes, rebuild relevant files and update the browser.
 * Asynchronous browser syncing of assets across multiple devices. Watches for changes to files and runs build tasks
*/

gulp.task('serve:watch', 'Starts server and watch', function() {
  browsersync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch(SCSS_FILES, ['css:watch']);
  gulp.watch(JS_WATCH_FILES, ['js:watch']);
});

gulp.task('serve', 'Build resources, starts server and watch', ['build:dev', 'serve:watch']);
