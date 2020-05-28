const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//config to check
const config = require("../config/config");

// Load input validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

// Load User model
const User = require("../models/User");


// @route POST admin/dashboard/createuser
// @desc Admin registers an user 
// @access Admin Only
router.post("/createuser", (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);

// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      // Le code de statut de réponse HTTP 400 Bad Request indique que le serveur ne peut pas comprendre la requête en raison 
      // d'une syntaxe invalide. Le client ne devrait pas répéter la requête sans modification
        
      return res.status(400).json({ email: "Invalid email" });
    } 
    else {
      console.log(req.body.userTypeAdmin);
      var userType = "User";
      if(req.body.userTypeAdmin){ 
        userType = "Admin";
     }
    
  //  console.log(userType, 'userType');
      const newUser = new User({
        name: req.body.name,
        surname:req.body.name,
        email: req.body.email,
        password: req.body.password,
        userType,  
      });

// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST /users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login", (req, res) => {
    // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
    User.findOne({ email }).then(user => {
      // Check if user exists
      if (!user) {
        return res.status(404).json({ invalidemail: "Invalid email" });
      }

  // Check password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User matched
          // Create JWT Payload
          const payload = {
            id: user.id,
            name: user.name
          };

  // Sign token
          jwt.sign(
            payload,
            config.secretOrKey,
            {
              expiresIn: 31556926 // 1 year in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(401)
            .json({ passwordincorrect: "Invalid credentials" });
        }
      });
    });
  });

  module.exports = router;