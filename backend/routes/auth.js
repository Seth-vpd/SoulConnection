const express = require('express');
const router = express.Router();
const login = require('../controllers/authController');
const isLoggedIn = require('../middlewares/isLoggedIn')

router.post('/login', login);
router.get('/check-auth', isLoggedIn)

module.exports = router;
