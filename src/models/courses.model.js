const Course = require('./course.schema');

async function getCourses(courses) {
  const response = await Course.find({ courses });
  return response;
}

async function getCourseById(id) {
  const response = await Course.findById({ _id: id });
  return response;
}

async function getAllCourse() {
  const response = await Course.find();
  return response;
}

async function postCourse(dataCourse) {
  const response = await Course.create(dataCourse);
  return response;
}

async function putCourse(course) {
  const response = await course.save();
  return response;
}

async function deleteCourse(id) {
  const response = await Course.remove({ _id: id });
  return response;
}

module.exports = {
  getCourses,
  getCourseById,
  getAllCourse,
  postCourse,
  putCourse,
  deleteCourse,
};
