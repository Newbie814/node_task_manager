const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  const { id: taskID } = req.params;
  try {
    const singleTask = await Task.findById(taskID);
    if (!singleTask) {
      return res.status(404).json({ msg: `No task with id: ${taskID}` });
    }
    res.status(200).json({ singleTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }

  // res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
