const express = require('express');

const usersRouter = require('./users.routes');
const rolRouter = require('./rol.routes');
const courseRouter = require('./course.routes');
const softwareAccessRouter = require('./softwareAccess.routes');

const api = express.Router();

api.use('/users', usersRouter);
api.use('/rols', rolRouter);
api.use('/courses', courseRouter);
api.use('/software', softwareAccessRouter);

module.exports = api;
