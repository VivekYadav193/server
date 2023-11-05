const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const mongoose = require("mongoose");
const Student = require("../models/Student");
const Educator = require("../models/Educator");


exports.addProfile = async (req, res) => {
  try {
    const { userid } = req.params;
    const user = User.findOne({ _id: userid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.accountType == "student") {
      const {
        studentDepartment,
        studentUniversity,
        studentRollNo,
        studentCourse,
      } = req.body;

      const updatedStudent = await Student.findOneAndUpdate(
        { _id: user.student },
        {
          studentDepartment,
          studentUniversity,
          studentRollNo,
          studentCourse,
          currentYearOfStudy,
          studentBatch,
        },
        { new: true }
      );

      return res.status(201).json({
        success: true,
        updatedStudent,
        message: "student profile updated successfully",
      });
    } else if (user.accountType == "educator") {
      const {
        educatorId,
        designation,
        educatorDepartment,

        educatorCollege,
      } = req.body;

      const updatedEducator = await Educator.findOneAndUpdate(
        { _id: user.educator },
        {
          educatorId,
          designation,
          educatorDepartment,

          educatorCollege,
        },
        { new: true }
      );

      return res.status(201).json({
        success: true,
        updatedEducator,
        message: "educator profile updated successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid account type",
      });
    }
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { userid } = req.params;
    const user = await User.findOne({ _id: userid });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    if (user.accountType == "student") {
      const student = await Student.findOne({ _id: user.student }).populate(
        "student"
      );

      return res.status(200).json({
        success: true,
        student,
        message: "student profile fetched successfully",
      });
    } else if (user.accountType == "educator") {
      const educator = await Educator.findOne({ _id: user.educator }).populate(
        "educator"
      );

      return res.status(200).json({
        success: true,
        educator,
        message: "educator profile fetched successfully",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid account type",
      });
    }
  } catch {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};
