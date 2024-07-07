const mongoose = require('mongoose');

const HealthQuestionnaireSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  answers: {
    type: Map,
    of: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('HealthQuestionnaire', HealthQuestionnaireSchema);
