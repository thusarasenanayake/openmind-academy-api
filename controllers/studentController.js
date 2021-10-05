const database = require('../database/mongodb');
const students = database.getCollection('openmind_academy', 'students');
const Student = require('../models/Student');

// ------ responses ------
const setNotFound = {
  status: 'fail',
  data: [{ message: 'No documents found!' }],
};

const setSuccess = (result) => {
  return {
    status: 'success',
    data: [result],
  };
};

const setError = (err) => {
  return {
    status: 'error',
    data: [err.message || err.name],
  };
};

const student_index_all = async (req, res) => {
  const options = {
    sort: { ID: 1 },
    projection: { _id: 0 },
  };

  const cursor = await students.find({}, options);

  if ((await cursor.count()) === 0) {
    res.status(404).json(setNotFound);
    return;
  }

  const result = await cursor.toArray();
  res.json(setSuccess(result));
};
const student_index_one = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await students.findOne({ ID: id }, { projection: { _id: 0 } });
  if (result === null) {
    res.status(404).json(setNotFound);
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
  res.json(setNotFound);
};

const student_create = async (req, res) => {
  const student = new Student(req.body);
  try {
    await students.insertOne(student);
    res.json(setSuccess('Successfully added one document.'));
  } catch (err) {
    res.status(401).json(setError(err));
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
    res.json('No documents matched the query. Updated 0 documents.');
  } catch (err) {
    res.status(401).json(setError(err));
  }
};

module.exports = {
  student_index_all,
  student_index_one,
  student_delete,
  student_create,
  student_update,
};
