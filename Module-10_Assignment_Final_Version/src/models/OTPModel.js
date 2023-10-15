const mongoose = require('mongoose');

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  status: Number,
});

const OTPModel = mongoose.model('OTPModel', otpSchema);

module.exports = OTPModel;
