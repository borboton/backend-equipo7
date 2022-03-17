const mongoose = require('mongoose');
const config = require('../config/config');
const logger = require('../config/logger');

mongoose.connection.once('open', () => {
  logger.info('db connected!');
});

mongoose.connection.on('error', (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(config.mongoose.url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
