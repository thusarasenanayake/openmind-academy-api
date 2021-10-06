require('dotenv').config({ path: './config/.env' });
const express = require('express');
const database = require('./database/mongodb');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// ------ config ------

app.use(express.json());
app.set('json spaces', 2);
const port = process.env.PORT || 5000;

// ------ database ------

// database.init('openmind_academy', 'students');

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

// ------ routes ------
app.use('/students', studentRoutes);

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
