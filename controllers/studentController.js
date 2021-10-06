const database = require('../database/mongodb');
const students = database.getCollection('openmind_academy', 'students');
const Student = require('../models/Student');
const { handleErrors } = require('../helpers/errorHandler');

// ------ responses ------
const setSuccess = (result) => {
  return {
    status: 'success',
    data: [result],
  };
};

const student_index_all = async (req, res) => {
  const options = {
    sort: { ID: 1 },
    projection: { _id: 0 },
  };

  const cursor = await students.find({}, options);

  const result = await cursor.toArray();
  res.json(setSuccess(result));
};
const student_index_one = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await students.findOne({ ID: id }, { projection: { _id: 0 } });
  if (result === null) {
    const error = handleErrors('fail', 404, req);
    res.status(404).json(error);
    return;
  }

  res.json(setSuccess(result));
};

const student_delete = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await students.deleteOne({ ID: id });
  if (result.deletedCount === 1) {
    res.json(setSuccess('Successfully deleted one document.'));
    return;
  }
  const error = handleErrors('fail', 404, req);
  res.json(error);
};

const student_create = async (req, res) => {
  const student = new Student(req.body);
  try {
    await students.insertOne(student);
    res.json(setSuccess('Successfully added one document.'));
  } catch (err) {
    const error = handleErrors('error', err, req);
    res.status(401).json(error);
  }
};

const student_update = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const student = new Student(req.body);
  try {
    const result = await students.updateOne(
      { ID: id },
      { $set: { ...student } }
    );
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
  student_index_all,
  student_index_one,
  student_delete,
  student_create,
  student_update,
};
