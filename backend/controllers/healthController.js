const HealthQuestionnaire = require('../models/HealthQuestionnaire');
const AdditionalQuestions = require('../models/AdditionalQuestions'); 


exports.submitQuestionnaire = async (req, res) => {
  try {
    const { userId, answers } = req.body;
    const existingQuestionnaire = await HealthQuestionnaire.findOne({ userId });

    if (existingQuestionnaire) {
      existingQuestionnaire.answers = answers;
      await existingQuestionnaire.save();
      res.json({ message: 'Questionnaire updated successfully' });
    } else {
      const questionnaire = new HealthQuestionnaire({ userId, answers });
      await questionnaire.save();
      res.json({ message: 'Questionnaire saved successfully' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};


exports.getResponse = (req, res) => {
  const { status,userId } = req.body;
  const response = 'ai-response'; //from ai
  const upstatus = false; // from ai // change this for new ouput #khushi

  if (upstatus) {
    res.json({ response: response,nstatus:true });
  } else {
    res.json({ response: response ,nstatus:false});
  }
};

exports.submitAdditionalQuestion = async (req, res) => {
  try {
    const { userId, question } = req.body;
    const response = 'this is your second time dude'; //from ai
    const additionalQuestion = new AdditionalQuestions({ userId, question });
    const upstatus = false; // from ai // change this for new ouput #khushi
    await additionalQuestion.save();
    if (upstatus) {
      res.json({ response: response,nstatus:true });
    } else {
      res.json({ response: response ,nstatus:false});
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getAdditionalQuestions = async (req, res) => {
  try {
    const { userId } = req.params;
    const questions = await AdditionalQuestions.find({ userId });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};