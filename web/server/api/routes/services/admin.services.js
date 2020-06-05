const mongoose = require('mongoose');
const Activity = require('../../models/activityModels');
const User = require('../../models/User');
const Room = require('../../models/roomModels');
const RoomReservations = require('../../models/roomReservationModels');
const fs = require('fs');

const nodemailer = require("nodemailer");
require('dotenv').config();

module.exports = {
    createActivity: (req, res, next) => {
        try {
            const {
                startDate,
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

            // console.log(req.body);

            var activityType;

            if (activityTypeSportive && activityTypeSportive === 'true') {
                activityType = 'Sportive';
            } else {
                activityType = 'Cultural';
            }

            var checkAvailability = RoomReservations.where('room_id').equals(selectedOption).where('date').equals(startDate).exec(function (err, rooms) {
                if (err) return handleError(err);
                // console.log(rooms.length);
                if (!rooms || rooms.length == 0) {
                    // console.log('iciiii');
                    Activity.create({
                        date: startDate,
                        title: activityTitle,
                        description: activityDescription,
                        address: activityAddress,
                        city: activityCity,
                        zip: activityZip,
                        activityType: activityType,
                        responsibleName: activityResponsibleName,
                        responsibleEmail: activityResponsibleEmail,
                        responsiblePhone: activityResponsiblePhone,
                        startHour: activityStart,
                        endHour: activityEnd
                    }).then(result => {
                        return res.status(201).json({
                            message: "The activity successfully created",
                        })
                    })
                        .catch(error => res.status(500).json({error}))


                    RoomReservations.create({
                        room_id: selectedOption,
                        date: startDate,
                        title: activityTitle,
                        reservation_start_time: activityStart,
                        reservation_end_time: activityEnd
                    }).then(result => {
                        return res.status(201).json({
                            message: "The room reservation was successful!",
                        })
                    })
                        .catch(error => res.status(500).json({error}))

                } else {
                    for (var i = 0; i < rooms.length; i++) {
                        if ((activityStart >= rooms[i].reservation_start_time && activityStart < rooms[i].reservation_end_time) || (activityEnd > rooms[i].reservation_start_time && activityEnd <= rooms[i].reservation_end_time)) {
                            return res.status(500).json({
                                message: "La salle est déjà réservée pour ces plages horaires.",
                            })
                            //console.log(activityStart, ' - ', activityEnd);
                        }
                    }
                    Activity.create({
                        date: startDate,
                        title: activityTitle,
                        description: activityDescription,
                        address: activityAddress,
                        city: activityCity,
                        zip: activityZip,
                        activityType: activityType,
                        responsibleName: activityResponsibleName,
                        responsibleEmail: activityResponsibleEmail,
                        responsiblePhone: activityResponsiblePhone,
                        startHour: activityStart,
                        endHour: activityEnd
                    }).then(result => {
                        return res.status(201).json({
                            message: "The activity successfully created",
                        })
                    })
                        .catch(error => res.status(500).json({error}))


                    RoomReservations.create({
                        room_id: selectedOption,
                        date: startDate,
                        title: activityTitle,
                        reservation_start_time: activityStart,
                        reservation_end_time: activityEnd
                    }).then(result => {
                        return res.status(201).json({
                            message: "The room reservation was successful!",
                        })
                    })
                        .catch(error => res.status(500).json({error}))

                }
            });
        } catch (e) {
            console.log(e);
            const path = __dirname + '/../../../uploads/activities/' + req.file.filename;
            fs.unlink(path, (err) => {
                if (err) {
                    res.status(500).json({message: "couldn't find file"})
                }
            })
            res.status(500).json({error: "Something is wrong in code"})
        }

    },

    getActivitiy: (req, res, next) => {
        const id = req.params.id;
        Activity.findById(id)
            .exec()
            .then(result => res.status(200).json({result}))
            .catch(error => res.status(500).json({error}))
    },

    getActivities: (req, res, next) => {

        if (req.params.type === 'none-type' || req.params.type === 'All') {
            Activity.find()
                .exec()
                .then(result => res.status(200).json({result}))
                .catch(error => res.status(500).json({error}))
        } else {
            Activity.find()
                .where('activityType').equals(req.params.type)
                .exec()
                .then(result => res.status(200).json({result}))
                .catch(error => res.status(500).json({error}))
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

        if (userTypeAdmin) {
            userType = 'Admin';
        } else {
            userType = 'User';
        }
        User.create({
            name: name,
            surname: surname,
            email: email,
            password: password,
            passwordconfirmation: passwordconfirmation,
            userType: userType
        }).then(result => {
            res.status(201).json({
                message: "The user successfully created",
            })
        })
            .catch(error => res.status(500).json({error}))

    },

    getRooms: (req, res, next) => {
        Room.find()
            .exec()
            .then(result => res.status(200).json({result}))
            .catch(error => res.status(500).json({error}))
    },


    askToFollowActivity: (req, res, next) => {
        const {
            message,
            email,
            id,
            title
        } = req.body;

        cle = 'mjc' + id

        console.log(cle)

//console.log(req.body); return;

        const act_id = { _id: id };
        const update = { participants: email };

        var activity = Activity.findOneAndUpdate(act_id, update, {
                returnOriginal: false
            }

        .exec(function (err, result) {
            if (err) return handleError(err);
            console.log(result);
        }));

        console.log(id); return;



        var transporter = nodemailer.createTransport({
            service: 'gmail',
            secure: false,
            port: 25,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD
            },
            tlsL: {
                rejectUnauthorized: false
            }
        });


        const info = {
            from: 'mjc.stras.2020@gmail.com', // Sender address
            to: 'yilmaz.putun@hotmail.com',         // List of recipients
            cc: 'tatevik.osipova@gmail.com',
            subject: 'Inscription à une activité', // Subject line
            html: "<h1>Bonjour Admin!</h1><p>Ceci est une demande d'inscription pour l'activité ayant l'id : <b>" + id + " </b>et le titre : <b>" + title + " </b>.</p>" +
                "<p>Email : " + email + "</p>" +
                "<p>Message : " + message + "</p>" +
                "<br>" +
                "Bien Cordialement,"

        };

        transporter.sendMail(info, function (err, information) {
            if (err) {
                console.log(err)
            } else {

                console.log(information);
                console.log('sent');
            }
        });

    },
}
