const express = require('express');
const cors = require('cors');
const router = express.Router();
const upload = require('../../helpers/upload');
const { createActivity , getActivities, getActivitiy, getRooms, askToFollowActivity} = require('./services/admin.services');


var corsOptions = {
    origin: 'http://localhost',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

router.post('/createActivity', cors(corsOptions), upload.single('activityPhoto'), createActivity);
router.post('/askToFollowActivity', askToFollowActivity);
router.get('/getActivities/:type', getActivities);
router.get('/getActivity/:id', getActivitiy);
router.get('/getRooms', getRooms);

module.exports = router;



