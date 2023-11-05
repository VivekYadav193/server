const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  studentDepartment: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },

  studentUniversity: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },

  studentRollNo: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },

  studentCourse: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
