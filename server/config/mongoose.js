var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var MONGODB_URI = 'mongodb://localhost:27017/equas-dev';
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI);

module.exports = {mongoose};