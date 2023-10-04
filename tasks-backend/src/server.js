const app = require('./app');
const { port, newTaskPeriod } = require('./env-config');
const addNewTask = require('./utils/tasks.utils');

/**
 * A new Task will be added each minute if no period specified (e.g. NEW_TASK_PERIOD=60000)
 */
app.listen(port, () => {
  setInterval(addNewTask, newTaskPeriod);
  console.log(`Tasks Service listening on port ${port}`);
  console.log(`A new task will be added every ${newTaskPeriod} ms`);
});
