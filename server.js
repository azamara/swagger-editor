'use strict';

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');


var PORT = process.env.PORT || 8080;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  quiet: true
}).listen(PORT, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Development server started at http://localhost:' + PORT);
});
