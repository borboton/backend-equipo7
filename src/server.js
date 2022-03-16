const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('./config/logger');
const config = require('./config/config');
const dbConnection = require('./config/dbConnection');

const app = express();

// mongoose.connect(config.mongoose.url, {
//   useNewUrlParser: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });
dbConnection(config.mongoose.url);

app.use(cors());
app.options('*', cors());

const testRouter = require('./routes/test.router');

app.use(testRouter);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  logger.info(`Server Listening on ${PORT}`);
});
