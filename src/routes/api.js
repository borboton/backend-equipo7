const express = require('express');

const testRouter = require('./test.router');
const usersRouter = require('./users.routes');

const api = express.Router();

api.use('/', testRouter);
api.use('/users', usersRouter);

module.exports = api;
