const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  addressJob: {
    type: String,
    required: true,
  },
  startJob: {
    type: Date,
    required: true,
  },
  endJob: {
    type: Date,
    required: true,
  },
  //   courses: [Course],
  //   softwareAccess: [SofwareAccess],
});

module.exports = mongoose.model('Rol', rolSchema);
