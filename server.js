require('dotenv').config({ path: './config/.env' });
const express = require('express');
const database = require('./database/mongodb');
const studentRoutes = require('./routes/studentRoutes');

const app = express();

// ------ config ------
app.set('json spaces', 2);
const port = process.env.PORT || 5000;

// ------ database ------

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

// ------ config ------
// ------ config ------
// ------ config ------
// ------ config ------
// ------ config ------
