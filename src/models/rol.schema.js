const mongoose = require('mongoose');

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
  courses: [{ type: mongoose.Types.ObjectId, ref: 'Course' }],
  softwareAccess: [{ type: mongoose.Types.ObjectId, ref: 'SofwareAccess' }],
});

module.exports = mongoose.model('Rol', rolSchema);
