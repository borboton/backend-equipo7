const express = require('express');

const usersRouter = require('./users.routes');

const api = express.Router();

// api.use('/', testRouter);
api.use('/users', usersRouter);

module.exports = api;
