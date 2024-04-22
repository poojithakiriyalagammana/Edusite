const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const studentSchema = new Schema({
    SID: {
        type: String,
        required: true,
        unique: true
      },
      FirstName: {
        type: String,
        required: true
      },
      LastName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      },
      NearCity: {
        type: String,
        required: true
      },
      Course: {
        type: String,
        required: true
      },
      Guardian: {
        type: String,
        required: true
      }
    });

const Student = mongoose.model("Student",studentSchema);

module.exports = Student;