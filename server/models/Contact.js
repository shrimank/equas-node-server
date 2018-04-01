var mongoose = require('mongoose');

var Contact = mongoose.model('Contact', {
  primary_phone_no: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  secondary_phone_no: {
    type: String,
    default: false
  },
  primary_email_id: {
    type: String,
    default: null
  },
  secondary_email_id : {
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

module.exports = {Contact};