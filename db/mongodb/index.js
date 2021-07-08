const mongoose = require('mongoose');

function MongoDB(url) {
  this.url = url;
  this.connection = null;
};

MongoDB.prototype.connect = function() {
  mongoose.connect(this.url, {useNewUrlParser: true, useUnifiedTopology: true});
  this.connection = mongoose.connection;
  this.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
  return this.connection;
};

module.exports = MongoDB;
