var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var ticktacktoeRouter = require('./routes/ticktacktoe.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/ticktacktoe', ticktacktoeRouter);

module.exports = app;
