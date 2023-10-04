const port = process.env.PORT || 8080;
const newTaskPeriod = process.env.NEW_TASK_PERIOD || 60000;

module.exports = { port, newTaskPeriod };
