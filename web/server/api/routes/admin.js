const express = require('express');
const router = express.Router();
const upload = require('../../helpers/upload');
const { createActivity , getActivities, getActivitiy, getRooms, askToFollowActivity} = require('./services/admin.services');

router.post('/createActivity', upload.single('activityPhoto'), createActivity);
router.post('/askToFollowActivity', askToFollowActivity);
router.get('/getActivities/:type', getActivities);
router.get('/getActivity/:id', getActivitiy);
router.get('/getRooms', getRooms);

module.exports = router;




