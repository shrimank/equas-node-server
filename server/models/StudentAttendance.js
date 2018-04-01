var mongoose = require('mongoose');

var StudentAttendance = mongoose.model('StudentAttendance', {
  studentId: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  studentName: {
    type: String,
    default: null
  },
  subject: {
    type: String,
    default: null
  },
  classGrade: {
    type: String,
    default: null
  },
  teacher: {
    type: String,
    default: null
  },
  attendanceDate: {
    type: Timestamp,
    default: null
  },
  presentFlag :{
      type:Boolean,
      default:false
  },
  remark:{
    type:String,
    default:null
  }
});

module.exports = {StudentAttendance};