const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const api = require('./routes/api');

const app = express();
require('./config/passport');

app.use(helmet());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use('/', api);

module.exports = app;
