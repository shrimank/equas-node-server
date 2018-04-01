var mongoose = require('mongoose');

var MasterStudents = mongoose.model('MasterStudents', {
  std_code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  first_name: {
    type: String,
    default: false
  },
  middle_name: {
    type: String,
    default: null
  },
  last_name : {
    type: String,
    default:true
  },
  guardian_first_name: {
    type: String,
    default: false
  },
  guardian_middle_name: {
    type: String,
    default: null
  },
  guardian_last_name : {
    type: String,
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
  master_sc_code:{
    type: mongoose.Schema.Types.ObjectId,
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

module.exports = {MasterStudents};