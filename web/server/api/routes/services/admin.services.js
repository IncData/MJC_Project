const mongoose = require('mongoose');
const Activity = require('../../models/activityModels');

module.exports = {
    createActivity: (req, res, next) => {
        console.log(req.body, "response");
        const { startDate,
                activityTitle,
                activityDescription,
                activityAddress,
                activityCity,
                activityZip,
                activityTypeCultural,
                activityTypeSportive,
                activityResponsibleName,
                activityResponsibleEmail,
                activityResponsiblePhone
        } = req.body;



    }
}
