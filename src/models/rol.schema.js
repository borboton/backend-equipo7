const mongoose = require('mongoose');
const Course = require('./course.schema');
const SofwareAccess = require('./softwareAccess.schema');

const rolSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  addressJob: {
    type: String,
    // required: true,
  },
  startJob: {
    type: Date,
    // required: true,
  },
  endJob: {
    type: Date,
    // required: true,
  },
  tools: {
    type: [String],
    // required: true,
  },
  manager: {
    type: String,
    // required: true,
  },
  courses: [Course],
  softwareAccess: [SofwareAccess],
});

module.exports = mongoose.model('Rol', rolSchema);
