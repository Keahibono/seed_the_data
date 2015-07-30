var express = require('express');
var app = express();

var sequelize = require('sequelize');
var pg = require('pg');

var server = app.listen(config.port, function (){
  console.log('working properly');
});