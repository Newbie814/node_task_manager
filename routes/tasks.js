const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

// app.get(`${baseUrl}`, (req, res) => {});
// app.post(`${baseUrl}`, (req, res) => {});
// app.get(`${baseUrl}/:id`, (req, res) => {});
// app.patch(`${baseUrl}/:id`, (req, res) => {});
// app.delete(`${baseUrl}/:id`, (req, res) => {});

module.exports = router;
