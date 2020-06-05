const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config()
const bodyParser = require('body-parser');
const users = require("./api/routes/users");
const passport = require("passport");
const backup = require ("./api/routes/backup")

const adminRoutes = require('./api/routes/admin');


mongoose.connect(
    `mongodb+srv://mjc:1234@mjcstrasbourg-2wl1e.gcp.mongodb.net/test?retryWrites=true&w=majority`,
    { useNewUrlParser : true,
    useUnifiedTopology: true })

    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-All-Methods, PUT, POST, PATCH, DELETE')
        return res.status(200).json({});
    }
    next()
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/admin', adminRoutes)

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./api/config/passport") (passport);
// Routes
app.use("/api/admin", users);

//Mongodb backup routes
//const backup = require ("./api/routes/backup")
app.use("/api/admin/", backup)

app.use((req, res, next) => {
    const error = new Error("404 Not Found");
    error.status = 404;
    next(error)
})
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;

