const mongodb = require('mongodb');

const client = new mongodb.MongoClient(process.env.MONGODB_URI);

exports.connect = async () => {
  await client.connect();
};

exports.getCollection = (name) => {
  const database = client.db('openmind_academy');
  const students = database.collection(name);
  return students;
};
