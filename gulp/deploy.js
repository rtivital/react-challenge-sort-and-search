'use strict';

module.exports = (gulp, plugins, config) => () => {
  return gulp.src(`${config.paths.dist}/**/*`)
    .pipe(plugins.ghPages());
};
