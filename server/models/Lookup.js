
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Lookup',schema);