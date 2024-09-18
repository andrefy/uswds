const gulp = require("gulp");
const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */
uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need - see https://designsystem.digital.gov/documentation/getting-started/developers/phase-two-compile/#step-5-customize-path-settings
 */
uswds.paths.dist.css = './assets/uswds/css';
uswds.paths.dist.sass = './sass';
uswds.paths.dist.theme = './sass';
uswds.paths.dist.img = './assets/uswds/img';
uswds.paths.dist.fonts = './assets/uswds/fonts';
uswds.paths.dist.js = './assets/uswds/js';

/**
 * Register tasks provided by USWDS compile
 */
gulp.task('init', uswds.init);
gulp.task('compile', uswds.compile);
gulp.task('updateUswds', uswds.updateUswds);
gulp.task('copyTheme', uswds.copyTheme);
gulp.task('watch', uswds.watch);
gulp.task('copyAll', uswds.copyAll);
gulp.task('copyImages', uswds.copyImages);
gulp.task('copyJS', uswds.copyJS);
gulp.task('copyAssets', uswds.copyAssets);
gulp.task('copyFonts', uswds.copyFonts);
gulp.task('default', uswds.default);

/**
 * Define the 'start' task
 * Combines necessary tasks to start the development workflow
 */
gulp.task('start', gulp.series('init', 'compile', 'watch'));
