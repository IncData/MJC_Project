const mongoose = require('mongoose');
const Activity = require('../../models/activityModels');
const User = require('../../models/User');
const Room = require('../../models/roomModels');
const RoomReservations = require('../../models/roomReservationModels');

const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports = {
    createActivity: (req, res, next) => {
       // console.log(req.body, "response");
        const { startDate,
                activityTitle,
                activityStart,
                activityEnd,
                activityDescription,
                activityAddress,
                activityCity,
                activityZip,
                activityTypeSportive,
                activityResponsibleName,
                activityResponsibleEmail,
                activityResponsiblePhone,
                selectedOption

        } = req.body;
        let activityType;

        if (activityTypeSportive){
            activityType = 'Sportive';
        } else{
            activityType = 'Cultural';
        }

        console.log(startDate);

        var checkAvailability = RoomReservations.
        //find('room_id').equals(selectedOption).
        find({ "room_id" :  selectedOption}).
        where({"date": {"$gte": startDate, "$lt": startDate}}).
        //where('room_id').equals(selectedOption).
        //where('reservation_start_time').gt(activityStart).lt(activityEnd).
        //where('reservation_end_time').gt(activityStart).lt(activityEnd).
        exec(function (err, rooms) {
            if (err) return handleError(err);
            console.log(rooms);
        });



        /*if ((activityStart < 9 || activityStart>=22) || (activityEnd < 9 || activityEnd>22) || (activityStart > activityEnd)) {
            res.status(400).json({
                message: "une erreur est est survenue. Veuillez respecter les horaires!",
            })
        }*/

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
            responsiblePhone : activityResponsiblePhone,
            startHour : activityStart,
            endHour : activityEnd
        }).then(result => {
            res.status(201).json({
                message: "The activity successfully created",
            })
        })
            .catch(error => res.status(500).json({ error }))


        RoomReservations.create({
            room_id : selectedOption,
            date : startDate,
            title : activityTitle,
            reservation_start_time : activityStart,
            reservation_end_time : activityEnd
        }).then(result => {
            res.status(201).json({
                message: "The room reservation was successful!",
            })
        })
            .catch(error => res.status(500).json({ error }))

    },

    getActivitiy : (req, res, next) => {
        const id = req.params.id;
        Activity.findById(id)
            .exec()
            .then(result => res.status(200).json({ result }))
            .catch(error => res.status(500).json({ error }))
    },

    getActivities : (req, res, next) => {

        if(req.params.type === 'none-type' || req.params.type === 'All') {
            Activity.find()
                .exec()
                .then(result => res.status(200).json({ result }))
                .catch(error => res.status(500).json({ error }))
        } else {
            Activity.find()
            .where('activityType').equals(req.params.type)
            .exec()
            .then(result => res.status(200).json({ result }))
            .catch(error => res.status(500).json({ error }))
        }
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

    },

    getRooms : (req, res, next) => {
        Room.find()
            .exec()
            .then(result => res.status(200).json({ result }))
            .catch(error => res.status(500).json({ error }))
    },


    askToFollowActivity : (req, res, next) => {
        const { message,
                email,
                _id
        } = req.body;

console.log(req.body);
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure : false,
            port : 25,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tlsL :{
                rejectUnauthorized : false
            }
        });


        const info = {
            from: email, // Sender address
            to: 'yilmaz.putun@hotmail.com',         // List of recipients
            subject: 'Inscription à une activité', // Subject line
            text: message
        };

        transporter.sendMail(info, function(err, information) {
            if (err) {
                console.log(err)
            } else {

                console.log(information);
                console.log('sent');
            }
        });

    },
}
