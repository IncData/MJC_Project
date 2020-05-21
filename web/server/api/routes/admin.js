const express = require('express');
const router = express.Router();
const { createActivity } = require('./services/admin.services');

router.post('/createActivity', createActivity)

module.exports = router;
