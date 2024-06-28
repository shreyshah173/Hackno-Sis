const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

// Routes for /api/chats

// Example routes
router.get('/', chatController.getAllChats);
router.post('/', chatController.createChat);

module.exports = router;
