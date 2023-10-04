const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const tasksRouter = require('./routers/tasks.router');

const app = express();

app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/tasks", tasksRouter);

module.exports = app;
