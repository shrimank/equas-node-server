var mongoose = require('mongoose');

var MasterSchoolCollege = mongoose.model('MasterSchoolCollege', {
  sc_type: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  code: {
    type: String,
    default: null,
    required: true
  },
  name: {
    type: String,
    default: null,
    required:true
  },
  enabled : {
    type: Boolean,
    default:true
  },
  contact:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  address:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  licence_code:{
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  licence_expired_date:{
    type: Timestamp,
    required: true
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

module.exports = {MasterSchoolCollege};