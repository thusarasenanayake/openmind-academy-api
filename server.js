require('dotenv').config({ path: './config/.env' });
const express = require('express');
const database = require('./database/mongodb');
const studentRoutes = require('./routes/studentRoutes');
const courseRoutes = require('./routes/courseRoutes');

const app = express();

// ------ config ------

app.use(express.json());
app.set('json spaces', 2);
const port = process.env.PORT || 5000;

// ------ database ------

// database.init('openmind_academy', 'students');
// database.init('openmind_academy', 'courses');

database
  .connect()
  .then(() => {
    app.listen(port);
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

// ------ top m/ws ------
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Method', 'GET, POST, DELETE PUT');
    return res.status(200).json({});
  }

  next();
});

// ------ routes ------
app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

// ------ redirects ------

// ------ bottom m/ws ------

// ------ error handling ------

app.use((req, res, next) => {
  const error = new Error(404);
  next(error);
});

app.use((err, req, res, next) => {
  if (err.message === '404') {
    return res.status(404).json({
      status: 'fail',
      data: ['resource not found'],
    });
  }

  res.json({ status: 'error', data: ['invalid request'] });
  next();
});
