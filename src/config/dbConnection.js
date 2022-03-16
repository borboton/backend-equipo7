const mongoose = require('mongoose');
const logger = require('./logger');

const dbConnection = async function (URL) {
  let db;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    logger.info('connected With the User DataBase');
    db = mongoose.connection;
    logger.info('After the connected');
  } catch (e) {
    console.log(e);
  }

  return db;
};

module.exports = dbConnection;
