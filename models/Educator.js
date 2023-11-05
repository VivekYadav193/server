const mongoose = require("mongoose");

const EducatorSchema = mongoose.Schema({
  educatorId: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },

  designation: {
    type: String,
    default: null,
  },

  educatorDepartment: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },

  educatorCollege: {
    type: String,
    min: 6,
    max: 255,
    default: null,
  },
});

module.exports = mongoose.model("Educator", EducatorSchema);
