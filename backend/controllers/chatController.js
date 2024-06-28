const Chat = require('../models/Chat');

// Example controller functions
exports.getAllChats = async (req, res) => {
    try {
        const chats = await Chat.find();
        res.json(chats);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.createChat = async (req, res) => {
    const { message, sentByUser, order } = req.body;
    const chat = new Chat({ message, sentByUser, order });

    try {
        const newChat = await chat.save();
        res.status(201).json(newChat);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
