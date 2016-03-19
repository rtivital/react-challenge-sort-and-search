'use strict';

module.exports = (gulp, plugins, config) => () => {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(`${config.paths.dist}/${config.output.images}`));
    
  return gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist));
};
