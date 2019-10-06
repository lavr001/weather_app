var gulp = require('gulp'),
    connect = require('gulp-connect');

function server(done) {
  connect.server({
    port: 8888
  });
  done();
}

gulp.task('default', gulp.parallel(server));    
