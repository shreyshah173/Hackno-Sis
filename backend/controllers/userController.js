const bcrypt = require('bcrypt');
const User = require('../models/User');
// console.log('userController');

const signup = async (req, res) => {
    const { name, email, phone, password, securityQuestion, securityAnswer } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            name,
            email,
            phone,
            password: hashedPassword,
            securityQuestion,
            securityAnswer: await bcrypt.hash(securityAnswer, 10)
        });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error registering user' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user && await bcrypt.compare(password, user.password)) {
            res.status(200).json({ message: 'Login successful', user });
        } else {
            res.status(400).json({ error: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error logging in' });
    }
};

const forgotPassword = async (req, res) => {
    const { email, securityQuestion, securityAnswer, newPassword } = req.body;
    try {
        const user = await User.findOne({ email, securityQuestion });
        if (user && await bcrypt.compare(securityAnswer, user.securityAnswer)) {
            user.password = await bcrypt.hash(newPassword, 10);
            await user.save();
            res.status(200).json({ message: 'Password updated successfully' });
        } else {
            res.status(400).json({ error: 'Security question/answer do not match' });
        }
    } catch (error) {
        res.status(400).json({ error: 'Error resetting password' });
    }
};

module.exports = { signup, login, forgotPassword };
