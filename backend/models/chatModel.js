const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  sentbyuser: {
    type: Boolean,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  index: {
    type: Number,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
