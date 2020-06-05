const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RoomReservationsSchema = new Schema({

    room_id: {
        type: Schema.Types.ObjectId,
        ref: "Room"
    },
    date: {
        type: Date,
        required: true,
    },
    reservation_start_time: {
        type: Number,
        required: true,
    },
    reservation_end_time: {
        type: Number,
        required: true,
    },
});


const RoomReservations = mongoose.model('RoomReservations', RoomReservationsSchema);

module.exports = RoomReservations;