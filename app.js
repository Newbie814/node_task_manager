const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const connectDB = require('./db/connect');
const baseUrl = '/api/v1/tasks';

require('./db/connect');

const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task App');
});

app.use(`${baseUrl}`, tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_CONNECTION_STRING);
    app.listen(port, () => console.log(`Server started on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
