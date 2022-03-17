const express = require('express');
const { getUserController } = require('../controllers/user.controller');
const { postUserController } = require('../controllers/user.controller');

const testRouter = express.Router();

//  test routes
testRouter.use('/', (req, res) =>
  res.send(200).json({ message: 'Test para los de front' })
);
testRouter.get('/user', getUserController);
testRouter.post('/user', postUserController);

module.exports = testRouter;
