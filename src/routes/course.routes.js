const express = require('express');

const {
  getAllCourses,
  getCourseById,
  postCourse,
  putCourseById,
  deleteCourseById,
} = require('../controllers/rol.controller');

const courseRouter = express.Router();

courseRouter.get('/', getAllCourses);
courseRouter.get('/:id', getCourseById);
courseRouter.post('/', postCourse);
courseRouter.put('/:id', putCourseById);
courseRouter.delete('/:id', deleteCourseById);

module.exports = courseRouter;
