var mongoose = require('mongoose');

var Licence = mongoose.model('Licence', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  value: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  _created_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  _updated_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  _deleted_by: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  _created_dt: {
    type: Date,
    required: true
  },
  _updated_dt: {
    type: Date,
    required: false
  },
  _deleted_dt: {
    type: Date,
    required: false
  }
});

module.exports = {Licence};