const database = require('../database/mongodb');
const courses = database.getCollection('openmind_academy', 'courses');
const Course = require('../models/Course');
const { handleErrors } = require('../helpers/errorHandler');

// ------ responses ------
const setSuccess = (result) => {
  return {
    status: 'success',
    data: [result],
  };
};

const course_index_all = async (req, res) => {
  const options = {
    sort: { ID: 1 },
    projection: { _id: 0 },
  };

  const cursor = await courses.find({}, options);

  const result = await cursor.toArray();
  res.json(setSuccess(result));
};
const course_index_one = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await courses.findOne({ ID: id }, { projection: { _id: 0 } });
  if (result === null) {
    const error = handleErrors('fail', 404, req);
    res.status(404).json(error);
    return;
  }

  res.json(setSuccess(result));
};

const course_delete = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await courses.deleteOne({ ID: id });
  if (result.deletedCount === 1) {
    res.json(setSuccess('Successfully deleted one document.'));
    return;
  }
  const error = handleErrors('fail', 404, req);
  res.json(error);
};

const course_create = async (req, res) => {
  const course = new Course(req.body);
  try {
    await courses.insertOne(course);
    res.json(setSuccess('Successfully added one document.'));
  } catch (err) {
    const error = handleErrors('error', err, req);
    res.status(401).json(error);
  }
};

const course_update = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const course = new Course(req.body);
  try {
    const result = await courses.updateOne({ ID: id }, { $set: { ...course } });
    if (result.matchedCount === 1) {
      res.json(setSuccess('Successfully updated one document.'));
      return;
    }
    const error = handleErrors('fail', 404, req);
    res.json(error);
  } catch (err) {
    const error = handleErrors('error', err, req);
    res.status(401).json(error);
  }
};

module.exports = {
  course_index_all,
  course_index_one,
  course_create,
  course_delete,
  course_update,
};
