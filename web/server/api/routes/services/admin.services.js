const mongoose = require('mongoose');
const Activity = require('../../models/activityModels');
const User = require('../../models/userModels')

module.exports = {
    createActivity: (req, res, next) => {
       // console.log(req.body, "response");
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

        let activityType;

        if (activityTypeSportive){
            activityType = 'Sportive';
        } else{
            activityType = 'Cultural';
        }

        Activity.create({
            date : startDate,
            title : activityTitle,
            description : activityDescription,
            address : activityAddress,
            city : activityCity,
            zip : activityZip,
            activityType : activityType,
            responsibleName : activityResponsibleName,
            responsibleEmail : activityResponsibleEmail,
            responsiblePhone : activityResponsiblePhone
        }).then(result => {
            res.status(201).json({
                message: "The activity successfully created",
            })
        })
            .catch(error => res.status(500).json({ error }))

    },

    getActivities : (req, res, next) => {
        Activity.find()
            .exec()
            .then(result => res.status(200).json({ result }))
            .catch(error => res.status(500).json({ error }))
    },

    createUser: (req, res, next) => {
        console.log(req.body, "response");
        const {
            name,
            surname,
            email,
            password,
            passwordconfirmation,
            userTypeUser,
            userTypeAdmin
        } = req.body;

        let userType;

        if (userTypeAdmin){
            userType = 'Admin';
        } else{
            userType = 'User';
        }

        User.create({
            name : name,
            surname : surname,
            email : email,
            password : password,
            passwordconfirmation : passwordconfirmation,
            userType : userType
        }).then(result => {
            res.status(201).json({
                message: "The user successfully created",
            })
        })
            .catch(error => res.status(500).json({ error }))

    }

}
