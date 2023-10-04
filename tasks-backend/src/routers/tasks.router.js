const express = require('express');
const router = express.Router();
const { storage } = require('../data/tasks');

router.get("/", (_, res) => res.json(Array.from(storage.values())));

module.exports = router;
