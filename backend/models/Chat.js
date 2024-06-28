const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    message: {
        type: String,
        required: true
    },
    sentByUser: {
        type: Boolean,
        required: true
    },
    order: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Chat', chatSchema);
