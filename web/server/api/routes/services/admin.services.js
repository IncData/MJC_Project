const mongoose = require('mongoose');
const User = require('../../models/user');

module.exports = {
    createActivity: (req, res, next) => {
        console.log(res.req.body, "response");
    }
}