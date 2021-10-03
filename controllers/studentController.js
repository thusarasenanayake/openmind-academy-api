const database = require('../database/mongodb');
const students = database.getCollection('students');

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
  const id = req.params.id;

  const result = await students.findOne({ ID: id }, { projection: { _id: 0 } });
  if (result === null) {
    res.status(404).json('No documents matched the ID');
    return;
  }

  res.json(result);
};

const student_delete = async (req, res) => {
  const id = req.params.id;

  const result = await students.deleteOne({ ID: id });
  if (result.deletedCount === 1) {
    res.json('Successfully deleted one document.');
    return;
  }
  res.json('No documents matched the query. Deleted 0 documents.');
};

module.exports = { student_index_all, student_index_one, student_delete };
