const database = require('../database/mongodb');
const students = database.getCollection('openmind_academy', 'students');
const Student = require('../models/Student');

const student_index_all = async (req, res) => {
  const options = {
    sort: { ID: 1 },
    projection: { _id: 0 },
  };

  const cursor = await students.find({}, options);

  if ((await cursor.count()) === 0) {
    res.status(404).json('No documents found!');
    return;
  }

  const result = await cursor.toArray();
  res.json(result);
};
const student_index_one = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await students.findOne({ ID: id }, { projection: { _id: 0 } });
  if (result === null) {
    res.status(404).json('No documents matched the ID');
    return;
  }

  res.json(result);
};

const student_delete = async (req, res) => {
  const id = Number.parseInt(req.params.id);

  const result = await students.deleteOne({ ID: id });
  if (result.deletedCount === 1) {
    res.json('Successfully deleted one document.');
    return;
  }
  res.json('No documents matched the query. Deleted 0 documents.');
};

const student_create = async (req, res) => {
  const student = new Student(req.body);
  try {
    await students.insertOne(student);
    res.json('Successfully added one document.');
  } catch (err) {
    res.status(401).json(err);
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
      res.json('Successfully updated one document.');
      return;
    }
    res.json('No documents matched the query. Updated 0 documents.');
  } catch (err) {
    res.status(401).json(err);
  }
};

module.exports = {
  student_index_all,
  student_index_one,
  student_delete,
  student_create,
  student_update,
};
