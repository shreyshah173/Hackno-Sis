const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  index: {
    type: Number,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  topicname: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
