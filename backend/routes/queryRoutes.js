const express = require('express');
const router = express.Router();
const queryController = require('../controllers/queryController');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// Routes for /api/queries
router.get('/', queryController.getAllQueries);
router.post('/', queryController.createQuery);
router.delete('/', queryController.deleteAllQueries);
router.post('/chat-with-document', upload.single('file'), queryController.chatWithDocument);

module.exports = router;
