const express = require('express');
const router = express.Router();
const { createActivity , getActivities, createUser} = require('./services/admin.services');

router.post('/createActivity', createActivity);
router.get('/getActivities', getActivities);
router.post('/createUser', createUser);

module.exports = router;
