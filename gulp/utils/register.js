'use strict';

module.exports = (gulp, plugins, config) => (tasks) => {
  tasks.forEach(function(task) {
    gulp.task(task, require(`../${task}`)(gulp, plugins, config));
  });
};
