//////////////////////////////////////////////////////////////////////////////
// set up 
//////////////////////////////////////////////////////////////////////////////

var express  = require('express');
var app      = express();                              
var mongoose = require('mongoose');                   
var morgan = require('morgan');        // log requests to the console
var bodyParser = require('body-parser');    // pull information from HTML POST
// var methodOverride = require('method-override');

var webpackDevMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
 
var compiler = webpack(webpackConfig);

// MongoDB via mlab
mongoose.connect('mongodb://localhost/test');
var conn = mongoose.connection;              
 
conn.once('open', function() {
  console.log("connected to mongodb://localhost/test");
  // Wait for the database connection to establish, then start the app.                         
});
 
var compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));

// boilerplate from webpacDevMiddleware repo 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

// Front end routes, catch all for now
app.get('*', function(req, res) {
  res.sendfile('./www/index.html');
});
 
var server = app.listen(5000, function() {
  var port = server.address().port;
  console.log('Example app listening at port: ', port);
});