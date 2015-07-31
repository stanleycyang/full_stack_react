var gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server');

gulp.task('webpack', function(callback){
  webpack({
  
  }, function(error, stats){
    if(error) throw new gutil.PluginError('webpack', error);
    gutil.log('[webpack]', stats.toString({
    
    }));
  });
});
