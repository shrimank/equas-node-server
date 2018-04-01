var mongoose = require('mongoose');

var Licence = mongoose.model('Licence', {
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  type: {
    type: String,
    default: false
  }
});

module.exports = {Licence};