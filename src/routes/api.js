const express = require('express');

const testRouter = require('./test.router');

const api = express.Router();

api.use('/', testRouter);

module.exports = api;
