const mongoose = require('mongoose');

const worksSchema = new mongoose.Schema({
  title: String,
  classNote: String,
  description: String,
  status: String,
  email: String,
});

const WorksModel = mongoose.model('WorksModel', worksSchema);

module.exports = WorksModel;
