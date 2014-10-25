/**
 * Dependencies.
 */

var express = require('express');
var static = require('express').static;
var assets = require('connect-assets');
var logger = require('morgan');
var path = require('path');
var env = require('envc')();

// server
var app = express();

// logger
app.use(logger('dev'));

// assets
app.use(assets({
  paths: ['assets/js', 'assets/css', 'assets/vendor'],
  helperContext: app.locals
}));

// static files
app.use(static(path.join(__dirname, 'public')));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// index
app.get('/', function(req, res) {
  res.render('index');
});

// go get 'em
app.listen(env.PORT);
