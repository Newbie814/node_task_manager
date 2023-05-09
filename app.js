const express = require('express');
const app = express();
const port = 3000;
const baseUrl = '/api/v1/tasks';

const tasks = require('./routes/tasks');

// middleware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task App');
});

app.use(`${baseUrl}`, tasks);

app.listen(port, () => console.log(`Server started on port ${port}`));
