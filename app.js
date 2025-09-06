var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
const indexRouter = require('./routes/index');

// app setting
const port = "3009";
var app = express();
app.listen(port);

app.use((request, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// logging
app.use(logger('dev'));

//service-worker
app.get('/manifest.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'manifest.json'));
});
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'service-worker.js'));
});
app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js");
}

// extra safety
app.use(cookieParser());
app.use(session({ secret: 'delavazsupersecret', saveUninitialized: true, resave: true }));
app.use(express.static(path.join(__dirname, 'assets')));

// index
app.use('/', indexRouter);

// export
module.exports = app;
