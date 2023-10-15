const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  email: String,
  firstName: String,
  lastName: String,
  mobile: String,
  password: String,
  address: String,
  roll: String,
  class: String,
});

const StudentsModel = mongoose.model('StudentsModel', studentSchema);

module.exports = StudentsModel;
