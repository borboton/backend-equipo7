const express = require('express');

const {
  getSoftwareById,
  getAllSoftware,
  postSoftware,
  putSoftwareById,
  deleteSoftwareById,
} = require('../controllers/rol.controller');

const softwareAccessRouter = express.Router();

// softwareAccessRouter.get('/', getAllSoftware);
// softwareAccessRouter.get('/:id', getSoftwareById);
// softwareAccessRouter.post('/', postSoftware);
// softwareAccessRouter.put('/:id', putSoftwareById);
// softwareAccessRouter.delete('/:id', deleteSoftwareById);

module.exports = softwareAccessRouter;
