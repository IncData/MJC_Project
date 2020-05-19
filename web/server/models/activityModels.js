const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ActivitySchema = new Schema({
    //----------User might be leave here for admin read function so that he can get activities with user list also??? ----------//
  
  activitydate: {
    type: Date,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

 //To check with Tatevik (yilmaz)
  location: {
    type: "Point",
    coordinates: [x, y]
  },

  description: {
    type: String,
    required: true,
  },
 // To check with Tatevik
  responsible:{
    name: String,
    email: String,
    phone: String, 
    company: String,
    required: true,
    adress: {
      number: String,
      street: String,
      city: String,
      zipcode: String,
      required: true,
    }

  },
    
  //With checkbox in admin panel    
  activitytype: {
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

  createdAt: {
      type: new Date("<YYYY-mm-ddTHH:MM:ss>"),
      default: new Date.now
    },

    updatedAt: {
      type: new Date("<YYYY-mm-ddTHH:MM:ss>"),
      default: new Date.now
    },
});


const Activity = mongoose.model('Activty', ActivitySchema);

module.exports = Activity;
const mongoose = require('mongoose');
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");