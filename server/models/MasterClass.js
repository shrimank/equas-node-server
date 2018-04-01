var mongoose = require('mongoose');

var MasterClass = mongoose.model('MasterClass', {
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  name: {
    type: String,
    default: false
  },
  level: {
    type: String,
    default: null
  },
  prefix : {
    type: String,
    default:true
  },
  suffix: {
    type: String,
    default: false
  },
  guardian_middle_name: {
    type: String,
    default: null
  },
  category : {
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

module.exports = {MasterClass};