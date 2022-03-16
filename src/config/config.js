const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '../.env') });
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  mongoose: {
    url: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@hackaton-telecom-7.dadv6.mongodb.net/test`,
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
