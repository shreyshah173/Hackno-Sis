const mongoose = require('mongoose');

// console.log('model-user');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
    securityQuestion: String,
    securityAnswer: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
