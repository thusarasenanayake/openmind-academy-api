const mongodb = require('mongodb');
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const client = new mongodb.MongoClient(process.env.MONGODB_URI);

exports.connect = async () => {
  await client.connect();
};

exports.getCollection = (databaseName, collectionName) => {
  const database = client.db(databaseName);
  const students = database.collection(collectionName);
  return students;
};

// ------ (for initialization) creating a collection and adding mock data ------

exports.init = async (databaseName, collectionName) => {
  await client.connect();
  const database = client.db(databaseName);
  try {
    const schema = JSON.parse(
      await readFile(`${__dirname}/${collectionName}Schema.json`)
    );
    const docs = JSON.parse(
      await readFile(`${__dirname}/../mock/${collectionName}.json`)
    );
    const newCollection = await database.createCollection(collectionName, {
      validator: { $jsonSchema: schema },
    });

    const result = await newCollection.insertMany(docs);
    console.log(`${result.insertedCount} documents were inserted`);
  } catch (err) {
    console.log(err.message);
  }
};

// ------ (for validation) validating a sample document ------

// exports.validate = async (databaseName, collectionName) => {
//   const database = client.db(databaseName);
//   const collection = database.collection(collectionName);

//   const doc = {
//     ID: 1,
//     name: 'Adela Sudiati',
//     address: {
//       line1: '3318 Roderick Estates',
//       line2: 'Kusuma Isle',
//       line3: '',
//       city: 'Karanganyar',
//     },
//     courseID: 425,
//     phone: '021 3248 191',
//     email: 'Fern_S',
//   };
//   try {
//     const result = await collection.insertOne(doc);
//     console.log(result);
//   } catch (err) {
//     console.error(err.message, '\n----------------\n', err);
//   }
// };
