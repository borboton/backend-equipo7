const express = require('express');

const {
  getRolById,
  getAllRols,
  postRol,
  putRolById,
  deleteRolById,
} = require('../controllers/rol.controller');

const rolRouter = express.Router();

// rolRouter.get('/', getAllRols);
// rolRouter.get('/:id', getRolById);
// rolRouter.post('/', postRol);
// rolRouter.put('/:id', putRolById);
// rolRouter.delete('/:id', deleteRolById);

module.exports = rolRouter;
