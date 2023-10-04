const { Task, storage } = require('../data/tasks');

function addNewTask() {
  const newTask = new Task({
    id: storage.size,
    text: `Task ${ storage.size }`,
    completed: !!Math.round(Math.random())
  });
  storage.set(storage.size, newTask);
};

module.exports = addNewTask;
