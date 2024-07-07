const express = require('express');
const { signup, login, forgotPassword } = require('../controllers/userController');

const router = express.Router();
// console.log("userRoutes");

router.post('/signup', signup);
router.post('/login', login);
router.post('/forgot-password', forgotPassword);

module.exports = router;
