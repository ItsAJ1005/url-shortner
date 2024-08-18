const express = require('express');
const handleUserSignUp = require('../controllers/userController');
const handleUserLogin = require('../controllers/userController');

const router = express.Router();

router.post('/', handleUserSignUp);
router.post('/login', handleUserLogin)

module.exports = router;