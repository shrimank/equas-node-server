var mongoose = require('mongoose');

var MasterStaff = mongoose.model('MasterStaff', {
  code: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  code: {
    type: String,
    default: false
  },
  role: {
    type: String,
    default: null
  },
  first_name : {
    type: String,
    default:true
  },
  middle_name: {
    type: String,
    default: false
  },
  last_name: {
    type: String,
    default: null
  },
  salutation : {
    type: String,
    default:true
  },
  type : {
    type: String,
    default:true
  },
  designation : {
    type: String,
    default:true
  },
  qualification : {
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

module.exports = {MasterStaff};