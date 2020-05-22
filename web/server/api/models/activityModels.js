const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActivitySchema = new Schema({

  date: {
    type: Date,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  address:{
    type: String,
  },

  city:{
    type: String,
  },

  zip:{
    type: Number,
  },

  responsibleName:{
    type: String,
    required: true,
  },

  responsibleEmail:{
    type: String,
    required: true,
  },
  responsiblePhone:{
    type: Number,
    required: true,
  },

  activityType: {
    type: String,
    required: true, 
  },
  

  participants: [
      {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users"
        },
      }
  ],

});


const Activity = mongoose.model('Activty', ActivitySchema);

module.exports = Activity;
