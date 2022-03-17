const express = require('express');
const { getUsersController } = require('../controllers/user.controller');
const { postUserController } = require('../controllers/user.controller');

const testRouter = express.Router();

//  test routes

testRouter.get('/user', getUsersController);
testRouter.post('/user', postUserController);

module.exports = testRouter;
