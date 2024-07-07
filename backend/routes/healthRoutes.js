const express = require('express');
const router = express.Router();
const { submitQuestionnaire, getResponse, submitAdditionalQuestion, getAdditionalQuestions } = require('../controllers/healthController');

router.post('/submit', submitQuestionnaire);
router.post('/response', getResponse);
router.post('/additional', submitAdditionalQuestion); // New route for additional questions
router.get('/additional/:userId', getAdditionalQuestions); // New route to get additional questions

module.exports = router;
