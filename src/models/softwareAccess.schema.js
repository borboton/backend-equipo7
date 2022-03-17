const mongoose = require('mongoose');

const softwareAccessSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  urlAccess: {
    type: String,
    required: true,
  },
  urlTutorial: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('SoftwareAccess', softwareAccessSchema);
