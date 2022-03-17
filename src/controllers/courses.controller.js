const Course = require('../models/course.schema');

async function getCourses(courses) {
  const response = await Course.find({ courses });
  return response;
}

module.exports = { getCourses };
