const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CulturalActivitySchema = new Schema({
    //----------User might be leave here for admin read function so that he can get activities with user list also??? ----------//
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },

  title: {
    type: String,
    required: true,
  },

  activitydate: {
    type: Date,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  responsable: {
    type: String,
    required: true,
  },

  hashtag: {
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

  comments: [
      {
          user: {
              type: Schema.Types.ObjectId,
              ref: "users"
          },
          text: {
            type: String,
            required: true
          },
          name: {
            type: String
          },
      }
  ],
  createdAt: {
      type: Date,
      default: Date.now
    },
});


const CulturalActivity = mongoose.model('Post', CulturalActivitySchema);

module.exports = CulturalActivity;
const mongoose = require('mongoose');
const passwordHash = require("password-hash");
const jwt = require("jwt-simple");
const config = require("../config/config");