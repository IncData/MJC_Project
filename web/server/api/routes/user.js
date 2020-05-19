const express = require('express');
const router = express.Router();
const { sign_in } = require('./services/user.services');

router.post('/sign-in', sign_in)

module.exports = router;