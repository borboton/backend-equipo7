const winston = require('winston');

const logger = winston.createLogger({
  level: 'debug',
  transports: [new winston.transports.Console({ level: 'info' })],
});

module.exports = logger;
