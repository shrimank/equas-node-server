var mongoose = require('mongoose');

var Address = mongoose.model('Address', {
  address_line_one: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  address_line_two: {
    type: String,
    default: false
  },
  city: {
    type: String,
    default: null
  },
  state : {
    type: String,
    default:true
  },
  country : {
    type: String,
    default:true
  },
  zip_pin_code : {
    type: String,
    default:true
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
    type: Timestamp,
    required: true
  },
  _updated_dt: {
    type: Timestamp,
    required: true
  },
  _deleted_dt: {
    type: Timestamp,
    required: true
  }
});

module.exports = {Address};