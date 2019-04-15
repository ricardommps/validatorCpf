'use strict';

var assert = require('assert');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.connect('mongodb://mongo:27017/appClient')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
mongoose.set('debug', true);

mongoose.connection.dropDatabase(error => {
  console.log(error);
  process.exit(0);
});