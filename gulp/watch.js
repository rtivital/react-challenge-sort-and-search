'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.watch(config.paths.sass, gulp.series('build-scss'));
  gulp.watch(config.paths.js, gulp.series('build-js'));
  gulp.watch(config.paths.html, gulp.series('copy'));
};
