const express = require('express');
const router = express.Router();
const { createActivity , getActivities, getActivitiy, getRooms, askToFollowActivity} = require('./services/admin.services');

router.post('/createActivity', createActivity);
router.post('/askToFollowActivity', askToFollowActivity);
router.get('/getActivities/:type', getActivities);
router.get('/getActivity/:id', getActivitiy);
router.get('/getRooms', getRooms);


module.exports = router;
