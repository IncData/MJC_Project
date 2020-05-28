const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const RoomSchema = new Schema({

    name: {
        type: String,
        required: true,
    }
});


const Room = mongoose.model('Rooms', RoomSchema);

module.exports = Room;